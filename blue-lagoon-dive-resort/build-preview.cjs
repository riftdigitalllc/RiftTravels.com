/* Regenerate the standalone single-file preview from the source files. */
const fs = require("fs");
let html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("css/styles.css", "utf8");
const js = ["js/translations.js", "js/knowledge-base.js", "js/app.js", "js/assistant.js"]
  .map((f) => fs.readFileSync(f, "utf8")).join("\n\n");

// FUNCTION replacements so $ / special chars in inlined code aren't interpreted
html = html.replace(/\s*<link rel="stylesheet" href="css\/styles.css" \/>/,
  () => "\n  <style>\n" + css + "\n  </style>");
html = html.replace(/\s*<link rel="manifest" href="site.webmanifest" \/>/, () => "");
html = html.replace(/\s*<!-- Scripts -->[\s\S]*?<script src="js\/assistant.js"><\/script>/,
  () => "\n  <!-- Bundled scripts (inlined for standalone preview) -->\n  <script>\n" + js + "\n  </script>");

fs.writeFileSync("Blue-Lagoon-Dive-Resort-PREVIEW.html", html);

let ok = true;
for (const f of ["js/translations.js", "js/knowledge-base.js", "js/app.js", "js/assistant.js", "css/styles.css"]) {
  if (!html.includes(fs.readFileSync(f, "utf8"))) { ok = false; console.log("MISSING:", f); }
}
console.log(ok ? "All sources intact ✓" : "PROBLEM");
console.log("Size:", (fs.statSync("Blue-Lagoon-Dive-Resort-PREVIEW.html").size / 1024).toFixed(0) + " KB");
console.log("body unsplash imgs:", (html.match(/<img[^>]+unsplash/g) || []).length);
console.log("[hidden] rule:", html.includes("[hidden] { display: none"));
console.log("close handler:", html.includes("closeBtn.addEventListener('click', closePanel)"));
