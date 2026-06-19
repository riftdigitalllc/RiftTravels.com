/* ============================================================
   Blue Lagoon Dive Resort — app.js
   Navigation · i18n (EN/FR + any-language auto-translate) · booking
   ============================================================ */
(function () {
  'use strict';

  var T = window.TRANSLATIONS || {};
  var STORAGE_KEY = 'bldr_lang';
  var NATIVE = ['en', 'fr'];

  /* ---------- helpers ---------- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------- header scroll state ---------- */
  var header = $('.site-header');
  function onScroll() {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile nav ---------- */
  var navToggle = $('#nav-toggle');
  var mainNav = $('#main-nav');
  navToggle.addEventListener('click', function () {
    var open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  $all('#main-nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- i18n: apply a native language dictionary ---------- */
  function applyNative(lang) {
    var dict = T[lang] || T.en;
    document.documentElement.lang = lang;

    $all('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    $all('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] != null) el.setAttribute('placeholder', dict[key]);
    });
    $all('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] != null) el.setAttribute('aria-label', dict[key]);
    });

    var cur = $('#lang-current');
    if (cur) cur.textContent = lang.toUpperCase();

    $all('#lang-menu button[role=menuitem]').forEach(function (b) {
      b.setAttribute('aria-current', String(b.getAttribute('data-lang') === lang));
    });

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang } }));
  }

  /* ---------- "any language" via on-demand Google Translate ---------- *
   * For languages we don't ship natively we first reset to English, then
   * load the Google website translate widget and translate the live DOM.
   * This keeps EN/FR pristine and hand-crafted while still covering every
   * other language the user might need.
   * ------------------------------------------------------------------ */
  var googleLoaded = false;
  function loadGoogleTranslate(targetLang) {
    applyNative('en'); // translate from clean English source

    function doTranslate() {
      var combo = document.querySelector('.goog-te-combo');
      if (combo) {
        combo.value = targetLang;
        combo.dispatchEvent(new Event('change'));
        var cur = $('#lang-current');
        if (cur) cur.textContent = targetLang.toUpperCase();
      }
    }

    if (googleLoaded) { setTimeout(doTranslate, 400); return; }
    googleLoaded = true;

    window.googleTranslateElementInit = function () {
      /* eslint-disable no-undef */
      new google.translate.TranslateElement(
        { pageLanguage: 'en', autoDisplay: false }, 'google_translate_element'
      );
      setTimeout(doTranslate, 800);
    };

    if (!document.getElementById('google_translate_element')) {
      var holder = document.createElement('div');
      holder.id = 'google_translate_element';
      holder.style.display = 'none';
      document.body.appendChild(holder);
    }
    var s = document.createElement('script');
    s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(s);
  }

  function setLanguage(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    if (NATIVE.indexOf(lang) !== -1) {
      applyNative(lang);
    } else {
      loadGoogleTranslate(lang);
    }
  }
  window.BLDR_setLanguage = setLanguage;
  window.BLDR_currentLang = function () {
    try { return localStorage.getItem(STORAGE_KEY) || 'en'; } catch (e) { return 'en'; }
  };

  /* ---------- language switcher UI ---------- */
  var langToggle = $('#lang-toggle');
  var langMenu = $('#lang-menu');
  langToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    var open = langMenu.classList.toggle('open');
    langToggle.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', function () {
    langMenu.classList.remove('open');
    langToggle.setAttribute('aria-expanded', 'false');
  });
  langMenu.addEventListener('click', function (e) { e.stopPropagation(); });

  $all('#lang-menu button[role=menuitem]').forEach(function (b) {
    b.addEventListener('click', function () {
      setLanguage(b.getAttribute('data-lang'));
      langMenu.classList.remove('open');
    });
  });
  var moreSelect = $('#lang-more-select');
  if (moreSelect) {
    moreSelect.addEventListener('change', function () {
      if (moreSelect.value) setLanguage(moreSelect.value);
    });
  }

  /* ---------- initial language: ?lang= → storage → browser ---------- */
  function initLang() {
    var params = new URLSearchParams(location.search);
    var fromUrl = params.get('lang');
    var stored;
    try { stored = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var browser = (navigator.language || 'en').slice(0, 2).toLowerCase();
    var lang = fromUrl || stored || (NATIVE.indexOf(browser) !== -1 ? browser : 'en');
    setLanguage(lang);
  }
  initLang();

  /* ---------- booking widget ---------- */
  var WHATSAPP = '639000000000';
  var EMAIL = 'hello@bluelagoondiveresort-philippines.com';

  var ROOMS = {
    standard: { key: 'rooms.standard_name', price: 55 },
    superior: { key: 'rooms.superior_name', price: 80 },
    seaview:  { key: 'rooms.seaview_name',  price: 120 },
    apartment:{ key: 'rooms.apartment_name', price: 95 }
  };

  // sensible default dates: tomorrow → +3 nights
  function fmt(d) { return d.toISOString().slice(0, 10); }
  var checkinEl = $('#checkin');
  var checkoutEl = $('#checkout');
  var today = new Date();
  var t1 = new Date(today.getTime() + 86400000);
  var t2 = new Date(today.getTime() + 4 * 86400000);
  checkinEl.min = fmt(today);
  checkinEl.value = fmt(t1);
  checkoutEl.min = fmt(t1);
  checkoutEl.value = fmt(t2);
  checkinEl.addEventListener('change', function () {
    var next = new Date(new Date(checkinEl.value).getTime() + 86400000);
    checkoutEl.min = fmt(next);
    if (checkoutEl.value <= checkinEl.value) checkoutEl.value = fmt(next);
  });

  function tr(key) {
    var lang = window.BLDR_currentLang();
    var dict = T[lang] || T.en;
    return dict[key] || (T.en[key] || key);
  }

  var bookingForm = $('#booking-form');
  var resultsEl = $('#booking-results');

  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var ci = checkinEl.value, co = checkoutEl.value;
    if (!ci || !co) { alert(tr('booking.select_dates')); return; }
    var nights = Math.round((new Date(co) - new Date(ci)) / 86400000);
    if (nights < 1) { alert(tr('booking.invalid_dates')); return; }

    var guests = $('#guests').value;
    var chosen = $('#roomtype').value;
    var keys = chosen === 'any' ? Object.keys(ROOMS) : [chosen];

    resultsEl.innerHTML = '<h3 class="booking-heading">' + tr('booking.results_title') + '</h3>';
    keys.forEach(function (k) {
      var r = ROOMS[k];
      var total = r.price * nights;
      var nightsWord = nights === 1 ? tr('booking.night') : tr('booking.nights');
      var subject = encodeURIComponent('Booking request — ' + tr(r.key));
      var body = encodeURIComponent(
        'Room: ' + tr(r.key) + '\nCheck-in: ' + ci + '\nCheck-out: ' + co +
        '\nNights: ' + nights + '\nGuests: ' + guests + '\nEstimated total: $' + total
      );
      var waText = encodeURIComponent(
        'Hi Blue Lagoon Dive Resort! I would like to book the ' + tr(r.key) +
        ' from ' + ci + ' to ' + co + ' (' + nights + ' nights) for ' + guests + ' guest(s).'
      );
      var row = document.createElement('div');
      row.className = 'result-row';
      row.innerHTML =
        '<div><h4>' + tr(r.key) + '</h4><span class="result-meta">' + ci + ' → ' + co +
        ' · ' + nights + ' ' + nightsWord + ' · ' + guests + ' ' + tr('booking.guests').toLowerCase() + '</span></div>' +
        '<div class="result-price"><span class="result-meta">' + tr('booking.from') + '</span> <strong>$' + total + '</strong></div>' +
        '<div class="result-actions">' +
          '<a class="btn btn-primary btn-sm" href="mailto:' + EMAIL + '?subject=' + subject + '&body=' + body + '">' + tr('booking.request') + '</a>' +
          '<a class="btn btn-outline btn-sm" target="_blank" rel="noopener" href="https://wa.me/' + WHATSAPP + '?text=' + waText + '">' + tr('booking.whatsapp') + '</a>' +
        '</div>';
      resultsEl.appendChild(row);
    });
    resultsEl.hidden = false;
    resultsEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  });

  // Re-render booking results in the new language if already shown
  document.addEventListener('languagechange', function () {
    if (!resultsEl.hidden && resultsEl.children.length) {
      bookingForm.dispatchEvent(new Event('submit'));
    }
  });

  /* ---------- year in footer ---------- */
  var yr = $('#year');
  if (yr) yr.textContent = new Date().getFullYear();

})();
