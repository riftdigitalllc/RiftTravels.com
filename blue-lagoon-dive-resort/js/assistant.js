/* ============================================================
   Blue Lagoon Dive Resort — AI assistant
   ------------------------------------------------------------
   Two modes, decided automatically:

   1. LLM mode (recommended for production)
      If window.BLDR_CONFIG.chatEndpoint is set, every question (plus the
      uploaded knowledge base) is POSTed to your backend, which calls the
      Claude API and streams back a grounded answer. See api/chat.example.js
      and README.md for a ready-to-deploy serverless function.

   2. Local mode (zero-backend fallback, works on static hosting)
      With no endpoint configured, the assistant answers by retrieving the
      best-matching entries from the default knowledge base (knowledge-base.js)
      plus any files the owner uploads in the chat. This keeps the widget
      useful even before the LLM backend is wired up.
   ============================================================ */
(function () {
  'use strict';

  /* ---- configuration (override before this script, e.g. in index.html) ---- */
  var CONFIG = window.BLDR_CONFIG || {};
  var CHAT_ENDPOINT = CONFIG.chatEndpoint || null; // e.g. "/api/chat"

  function $(s) { return document.querySelector(s); }

  var launcher = $('#assistant-launcher');
  var panel = $('#assistant-panel');
  var closeBtn = $('#assistant-close');
  var messages = $('#assistant-messages');
  var form = $('#assistant-form');
  var input = $('#assistant-text');
  var fileInput = $('#kb-file');
  var kbStatus = $('#kb-status');

  // Runtime knowledge base = default entries + uploaded documents
  var defaultKB = window.DEFAULT_KB || [];
  var uploadedDocs = []; // { name, text }
  var history = [];      // { role, content } for LLM mode
  var greeted = false;

  function t(key, fallback) {
    var lang = (window.BLDR_currentLang && window.BLDR_currentLang()) || 'en';
    var dict = (window.TRANSLATIONS && (window.TRANSLATIONS[lang] || window.TRANSLATIONS.en)) || {};
    return dict[key] || fallback;
  }

  /* ---------- UI ---------- */
  function openPanel() {
    panel.hidden = false;
    launcher.style.display = 'none';
    if (!greeted) {
      addMessage('bot', t('assistant.greeting', 'Hi! Ask me anything about the resort.'));
      greeted = true;
    }
    input.focus();
  }
  function closePanel() {
    panel.hidden = true;
    launcher.style.display = 'grid';
  }
  // Launcher is a real WhatsApp link as a no-JS fallback; when JS runs we
  // intercept the click and open the in-page assistant instead.
  launcher.addEventListener('click', function (e) {
    if (e && e.preventDefault) e.preventDefault();
    openPanel();
  });
  closeBtn.addEventListener('click', closePanel);

  function addMessage(role, text) {
    var div = document.createElement('div');
    div.className = 'msg ' + (role === 'user' ? 'user' : 'bot');
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
    return div;
  }

  /* ---------- knowledge-base upload ---------- */
  fileInput.addEventListener('change', function () {
    var files = Array.prototype.slice.call(fileInput.files || []);
    if (!files.length) return;
    var pending = files.length;
    files.forEach(function (file) {
      var reader = new FileReader();
      reader.onload = function () {
        uploadedDocs.push({ name: file.name, text: String(reader.result || '') });
        pending--;
        if (pending === 0) {
          kbStatus.textContent = t('assistant.uploaded', 'Knowledge base loaded') +
            ' (' + uploadedDocs.length + ')';
        }
      };
      reader.readAsText(file);
    });
  });

  /* ---------- local retrieval (no-backend mode) ---------- */
  function normalize(s) {
    return (s || '').toLowerCase().replace(/[^\p{L}\p{N}\s]/gu, ' ');
  }

  // Split uploaded documents into paragraph chunks for matching
  function docChunks() {
    var chunks = [];
    uploadedDocs.forEach(function (doc) {
      doc.text.split(/\n\s*\n|\r\n\r\n/).forEach(function (para) {
        var clean = para.trim();
        if (clean.length > 20) chunks.push(clean);
      });
    });
    return chunks;
  }

  function scoreText(queryWords, text) {
    var hay = normalize(text);
    var score = 0;
    queryWords.forEach(function (w) {
      if (w.length < 3) return;
      if (hay.indexOf(w) !== -1) score += 1;
    });
    return score;
  }

  function localAnswer(question) {
    var qWords = normalize(question).split(/\s+/).filter(Boolean);
    var best = { score: 0, text: null };

    // 1) uploaded documents take priority (owner-provided, most specific)
    docChunks().forEach(function (chunk) {
      var s = scoreText(qWords, chunk) + 0.1; // slight preference for uploads
      if (s > best.score) best = { score: s, text: chunk };
    });

    // 2) default curated knowledge base
    defaultKB.forEach(function (entry) {
      var hay = entry.q.join(' ') + ' ' + entry.a;
      var s = scoreText(qWords, hay);
      // weight keyword hits in the q[] list more heavily
      qWords.forEach(function (w) {
        if (w.length >= 3 && entry.q.some(function (k) { return normalize(k).indexOf(w) !== -1; })) s += 1.5;
      });
      if (s > best.score) best = { score: s, text: entry.a };
    });

    if (best.score >= 1.5 && best.text) return best.text;
    return t('assistant.no_answer',
      "I don't have that detail yet, but our team would love to help. Reach us on WhatsApp at +63 900 000 0000 or email hello@bluelagoondiveresort-philippines.com.");
  }

  /* ---------- LLM backend mode ---------- */
  function buildKnowledgeContext() {
    var parts = [];
    defaultKB.forEach(function (e) { parts.push('Q: ' + e.q.join(', ') + '\nA: ' + e.a); });
    uploadedDocs.forEach(function (d) { parts.push('# ' + d.name + '\n' + d.text); });
    return parts.join('\n\n').slice(0, 24000); // keep payload reasonable
  }

  function llmAnswer(question, typingEl) {
    var lang = (window.BLDR_currentLang && window.BLDR_currentLang()) || 'en';
    history.push({ role: 'user', content: question });
    return fetch(CHAT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: history,
        language: lang,
        knowledge: buildKnowledgeContext()
      })
    })
      .then(function (r) {
        if (!r.ok) throw new Error('Bad response ' + r.status);
        return r.json();
      })
      .then(function (data) {
        var reply = data.reply || data.content || localAnswer(question);
        history.push({ role: 'assistant', content: reply });
        typingEl.classList.remove('typing');
        typingEl.textContent = reply;
      })
      .catch(function () {
        // graceful fallback to local retrieval if the backend is unavailable
        typingEl.classList.remove('typing');
        typingEl.textContent = localAnswer(question);
      });
  }

  /* ---------- submit handler ---------- */
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var q = input.value.trim();
    if (!q) return;
    addMessage('user', q);
    input.value = '';

    var typing = addMessage('bot', t('assistant.thinking', 'Thinking…'));
    typing.classList.add('typing');

    if (CHAT_ENDPOINT) {
      llmAnswer(q, typing);
    } else {
      // brief delay to feel responsive
      setTimeout(function () {
        typing.classList.remove('typing');
        typing.textContent = localAnswer(q);
      }, 350);
    }
  });

  /* keep the KB upload hint translated */
  document.addEventListener('languagechange', function () {
    if (kbStatus.textContent && uploadedDocs.length) {
      kbStatus.textContent = t('assistant.uploaded', 'Knowledge base loaded') + ' (' + uploadedDocs.length + ')';
    }
  });
})();
