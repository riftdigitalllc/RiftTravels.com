# Blue Lagoon Dive Resort — Website

A fast, mobile-first, SEO-optimized marketing site for **Blue Lagoon Dive Resort**
on Small La Laguna Beach, Sabang, Puerto Galera, Philippines.

It is a **self-contained static site** (plain HTML/CSS/JS, no build step), so it
deploys anywhere — GitHub Pages, Netlify, Vercel, Cloudflare Pages, or the
resort's own host — by uploading this folder.

## Features

- **Responsive, dive-resort theme** — ocean/lagoon palette, wave dividers, full
  layout from mobile to desktop, respects `prefers-reduced-motion`.
- **Multi-language** — hand-written **English + French** translations (the resort
  is the only French-speaking dive centre in Puerto Galera) plus an on-demand
  **Google Translate** fallback for any other language. Language is remembered
  (localStorage) and can be deep-linked with `?lang=fr`.
- **SEO** — semantic HTML, unique title/description, Open Graph + Twitter cards,
  `hreflang` tags, JSON-LD `Resort`/`LodgingBusiness` structured data,
  `robots.txt`, `sitemap.xml`, descriptive alt text, lazy-loaded images.
- **Availability & booking** — date picker, guest/room selectors, live nightly
  estimates, and one-click **email** or **WhatsApp** booking requests.
- **AI assistant** — floating chat widget that answers from a built-in resort
  knowledge base, **lets owners upload their own knowledge base** (`.txt`, `.md`,
  `.json`, `.csv`), and can be upgraded to a real Claude-powered backend.

## File layout

```
blue-lagoon-dive-resort/
├── index.html              # the whole site (one page, anchored sections)
├── css/styles.css          # ocean/lagoon theme, fully responsive
├── js/translations.js      # EN + FR dictionaries
├── js/app.js               # nav, i18n + language switcher, booking widget
├── js/knowledge-base.js    # default Q&A the assistant answers from
├── js/assistant.js         # chat widget (local KB search + optional LLM)
├── api/chat.example.js     # OPTIONAL Claude backend for the assistant
├── robots.txt · sitemap.xml · site.webmanifest
```

## Customising

- **Contact details / prices** — search `index.html`, `js/app.js`, and
  `js/knowledge-base.js` for the placeholder phone (`+63 900 000 0000`), email
  (`hello@bluelagoondiveresort-philippines.com`) and rates, and replace them.
- **Photos** — content images use Unsplash CDN URLs as tasteful placeholders.
  Swap the `src` attributes in `index.html` (and the hero/OG image URLs) for the
  resort's own photos and keep the descriptive `alt` text for SEO.
- **More languages natively** — add a dictionary to `js/translations.js` and a
  `data-lang` button in the language menu in `index.html`. Anything not shipped
  natively is still covered by the Google Translate fallback.
- **Map** — the contact section embeds OpenStreetMap; update the `bbox` and
  `marker` coordinates to the resort's exact location.

## Turning on the real AI assistant

By default the assistant answers **fully client-side** by retrieving the best
match from the default knowledge base plus any uploaded files — no server
required. To upgrade it to a Claude-powered concierge:

1. Deploy `api/chat.example.js` to a serverless platform (Vercel, Netlify,
   Cloudflare, Lambda…) and run `npm install @anthropic-ai/sdk`.
2. Set the `ANTHROPIC_API_KEY` environment variable on that platform.
3. Tell the widget where the endpoint lives by adding this line in `index.html`
   **before** `js/assistant.js`:

   ```html
   <script>window.BLDR_CONFIG = { chatEndpoint: "/api/chat" };</script>
   ```

The widget then POSTs the conversation plus the knowledge base to your endpoint,
which calls Claude (`claude-opus-4-8`) and returns a grounded answer. If the
endpoint is ever unreachable, the widget automatically falls back to local
knowledge-base search, so it never goes dark.

### Uploading a knowledge base

Open the chat, click **Upload knowledge base**, and select FAQ/rate/policy files
(`.txt`, `.md`, `.json`, `.csv`). In local mode the assistant searches them
directly; in LLM mode they are sent as grounding context so Claude answers from
the resort's own information.

## Deploying to GitHub Pages

This folder lives inside the repository and is served as static files. Once
pushed, it is reachable at `…/blue-lagoon-dive-resort/`. To host it on the
resort's own domain, point that domain at this folder (or copy the folder
contents to the domain's web root) and update the absolute URLs in
`index.html`, `sitemap.xml`, and `robots.txt`.

> Note: `api/chat.example.js` is intentionally suffixed `.example.js` so static
> hosts don't try to serve it as a page — it only runs on a serverless platform.
