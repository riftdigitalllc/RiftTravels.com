/**
 * Blue Lagoon Dive Resort — AI assistant backend (EXAMPLE)
 * ============================================================
 * Drop-in serverless function that turns the on-page chat widget into a real
 * Claude-powered concierge. Deploy it (Vercel, Netlify, Cloudflare Workers,
 * AWS Lambda, etc.), set the ANTHROPIC_API_KEY environment variable, then point
 * the widget at it by adding this BEFORE js/assistant.js in index.html:
 *
 *   <script>window.BLDR_CONFIG = { chatEndpoint: "/api/chat" };</script>
 *
 * The widget POSTs { messages, language, knowledge } and expects { reply }.
 * `knowledge` contains the default resort KB plus any files the owner uploaded
 * in the chat, so answers stay grounded in the resort's own information.
 *
 * Install the SDK:  npm install @anthropic-ai/sdk
 * ------------------------------------------------------------
 * This file is named *.example.js so it is not auto-deployed by GitHub Pages
 * (which is static-only). Move it into your serverless platform to use it.
 */

import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic(); // reads ANTHROPIC_API_KEY from the environment

const LANGUAGE_NAMES = {
  en: "English", fr: "French", es: "Spanish", de: "German", it: "Italian",
  nl: "Dutch", "zh-CN": "Chinese", ja: "Japanese", ko: "Korean", ru: "Russian",
  pt: "Portuguese", ar: "Arabic", tl: "Tagalog",
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    const { messages = [], language = "en", knowledge = "" } = req.body || {};
    const langName = LANGUAGE_NAMES[language] || "English";

    const system =
      "You are the friendly virtual concierge for Blue Lagoon Dive Resort, a " +
      "beachfront dive resort on Small La Laguna Beach, Sabang, Puerto Galera, " +
      "Oriental Mindoro, Philippines — the only French-speaking dive resort in the area.\n\n" +
      "Answer guest questions about rooms, diving, dining, amenities, getting there, " +
      "rates and booking. Be warm, concise and helpful. Use ONLY the knowledge base " +
      "below; if the answer isn't there, say you don't have that detail and point them " +
      "to WhatsApp +63 900 000 0000 or hello@bluelagoondiveresort-philippines.com. " +
      "Never invent prices, availability or policies.\n\n" +
      `Always reply in ${langName}.\n\n` +
      "=== KNOWLEDGE BASE ===\n" +
      knowledge;

    // The widget sends {role, content} pairs; keep only user/assistant turns.
    const turns = messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({ role: m.role, content: String(m.content || "") }));

    const response = await client.messages.create({
      model: "claude-opus-4-8",
      max_tokens: 1024,
      system: [{ type: "text", text: system, cache_control: { type: "ephemeral" } }],
      messages: turns.length ? turns : [{ role: "user", content: "Hello" }],
    });

    const reply = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    res.status(200).json({ reply });
  } catch (err) {
    console.error("chat handler error:", err);
    res.status(500).json({ error: "assistant_unavailable" });
  }
}
