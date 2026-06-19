/* Build script: embed beach/ocean SVG scenes, fix [hidden], rebuild preview */
const fs = require("fs");

/* ---------- reusable SVG pieces ---------- */
const palm = (x, y, s, c = "#0c3b2e") =>
  `<g transform='translate(${x},${y}) scale(${s})' fill='${c}'>` +
  `<path d='M0 0 C-3 -40 -2 -80 2 -120 L6 -120 C4 -80 5 -40 8 0 Z'/>` +
  `<path d='M4 -118 C-30 -130 -60 -120 -85 -95 C-55 -112 -25 -116 4 -108 Z'/>` +
  `<path d='M4 -118 C38 -132 70 -124 96 -98 C66 -114 34 -118 4 -108 Z'/>` +
  `<path d='M4 -118 C-18 -150 -42 -165 -72 -170 C-44 -158 -22 -140 0 -112 Z'/>` +
  `<path d='M4 -118 C26 -150 50 -166 80 -172 C52 -159 28 -141 8 -112 Z'/>` +
  `<path d='M4 -120 C2 -150 4 -175 6 -196 C10 -174 12 -150 10 -120 Z'/></g>`;
const sun = (cx, cy, r, c) =>
  `<circle cx='${cx}' cy='${cy}' r='${r * 1.7}' fill='${c}' opacity='0.25'/>` +
  `<circle cx='${cx}' cy='${cy}' r='${r}' fill='${c}'/>`;
const fish = (x, y, s, c) =>
  `<g transform='translate(${x},${y}) scale(${s})' fill='${c}'>` +
  `<ellipse cx='0' cy='0' rx='16' ry='8'/><path d='M14 0 L26 -9 L26 9 Z'/>` +
  `<circle cx='-9' cy='-1' r='1.6' fill='#fff'/></g>`;
const wave = (y, c, o) =>
  `<path d='M0 ${y} Q200 ${y - 18} 400 ${y} T800 ${y} V600 H0 Z' fill='${c}' opacity='${o}'/>`;
const svg = (inner) =>
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600' width='800' height='600'>${inner}</svg>`;

/* ---------- scenes ---------- */
const scenes = {
  hero: svg(
    `<defs><linearGradient id='s' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#bfeaf6'/><stop offset='1' stop-color='#eafaf8'/></linearGradient>` +
      `<linearGradient id='w' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#1aa6bb'/><stop offset='1' stop-color='#0a6ba8'/></linearGradient></defs>` +
      `<rect width='800' height='600' fill='url(#s)'/>` + sun(150, 130, 60, "#fff2c4") +
      `<rect y='300' width='800' height='300' fill='url(#w)'/>` +
      wave(320, "#16c0c8", "0.55") + wave(345, "#7fe3e8", "0.45") +
      `<path d='M0 470 Q400 440 800 478 L800 600 L0 600 Z' fill='#f3e3bd'/>` +
      `<path d='M0 470 Q400 440 800 478' stroke='#fff' stroke-width='5' fill='none' opacity='0.6'/>` +
      palm(700, 470, 1.15, "#0c3b2e") + palm(745, 478, 0.8, "#0f4636"),
  ),
  sunset: svg(
    `<defs><linearGradient id='s' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#ffb36b'/><stop offset='0.5' stop-color='#ff8a8a'/><stop offset='1' stop-color='#5b6fb0'/></linearGradient></defs>` +
      `<rect width='800' height='600' fill='url(#s)'/>` + sun(400, 330, 70, "#fff0c8") +
      `<rect y='360' width='800' height='240' fill='#2e3f72' opacity='0.85'/>` +
      `<rect x='360' y='360' width='80' height='240' fill='#ffd9a0' opacity='0.5'/>` +
      wave(380, "#3a4f8a", "0.6") + wave(405, "#26356b", "0.7") +
      palm(110, 470, 1.25, "#23264a") + palm(70, 478, 0.85, "#23264a"),
  ),
  reef: svg(
    `<defs><linearGradient id='d' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#0a6ba8'/><stop offset='1' stop-color='#02406b'/></linearGradient></defs>` +
      `<rect width='800' height='600' fill='url(#d)'/>` +
      `<polygon points='120,0 200,0 90,600 10,600' fill='#7fe3e8' opacity='0.12'/>` +
      `<polygon points='520,0 600,0 470,600 390,600' fill='#7fe3e8' opacity='0.1'/>` +
      fish(250, 200, 1.4, "#ffd36b") + fish(520, 150, 1, "#ff9a6b") + fish(600, 260, 1.2, "#7fe3e8") +
      `<circle cx='330' cy='120' r='6' fill='#cdeef5' opacity='0.6'/><circle cx='355' cy='90' r='4' fill='#cdeef5' opacity='0.5'/><circle cx='300' cy='150' r='3' fill='#cdeef5' opacity='0.5'/>` +
      `<path d='M0 600 L0 500 Q120 440 240 500 T520 500 T800 480 L800 600 Z' fill='#063457'/>` +
      `<g fill='#ff7a59'><path d='M120 520 q-18 -70 6 -110 q24 40 6 110 Z'/><path d='M150 525 q-12 -55 4 -86 q18 32 6 86 Z'/></g>` +
      `<g fill='#c98bd6'><path d='M560 510 q-16 -64 5 -100 q22 36 6 100 Z'/><path d='M590 514 q-10 -48 4 -76 q16 28 5 76 Z'/></g>` +
      `<g fill='#16c0c8'><circle cx='400' cy='520' r='12'/><circle cx='420' cy='524' r='9'/><circle cx='384' cy='524' r='8'/></g>`,
  ),
  lagoon: svg(
    `<defs><linearGradient id='l' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='#7fe3e8'/><stop offset='0.6' stop-color='#16c0c8'/><stop offset='1' stop-color='#0a6ba8'/></linearGradient></defs>` +
      `<rect width='800' height='600' fill='url(#l)'/>` +
      `<path d='M-20 300 Q200 230 420 300 Q560 345 760 300 Q700 400 460 410 Q220 420 -20 360 Z' fill='#f3e7c4' opacity='0.95'/>` +
      `<path d='M-20 300 Q200 230 420 300 Q560 345 760 300' stroke='#fff' stroke-width='6' fill='none' opacity='0.5'/>` +
      wave(150, "#bff0f1", "0.35") + wave(470, "#0a6ba8", "0.3"),
  ),
  overwater: svg(
    `<defs><linearGradient id='s' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#cdeef5'/><stop offset='1' stop-color='#9fe0ea'/></linearGradient>` +
      `<linearGradient id='w' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#16c0c8'/><stop offset='1' stop-color='#0a6ba8'/></linearGradient></defs>` +
      `<rect width='800' height='600' fill='url(#s)'/>` + sun(640, 120, 46, "#fff2c4") +
      `<rect y='300' width='800' height='300' fill='url(#w)'/>` +
      `<g fill='#5b3a25'>` +
      `<g transform='translate(180,250)'><path d='M-60 60 L0 0 L60 60 Z' fill='#b9663b'/><rect x='-45' y='58' width='90' height='52' fill='#e9c8a0'/><rect x='-4' y='300' width='8' height='-240' fill='#5b3a25'/><rect x='-44' y='110' width='8' height='200'/><rect x='36' y='110' width='8' height='200'/></g>` +
      `<g transform='translate(430,280) scale(0.8)'><path d='M-60 60 L0 0 L60 60 Z' fill='#b9663b'/><rect x='-45' y='58' width='90' height='52' fill='#e9c8a0'/><rect x='-44' y='110' width='8' height='220'/><rect x='36' y='110' width='8' height='220'/></g></g>` +
      wave(330, "#7fe3e8", "0.5") + wave(360, "#0a6ba8", "0.4"),
  ),
  pool: svg(
    `<defs><linearGradient id='s' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#ffd9a0'/><stop offset='1' stop-color='#ffeccb'/></linearGradient>` +
      `<linearGradient id='p' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#37c6d4'/><stop offset='1' stop-color='#0f8fb0'/></linearGradient></defs>` +
      `<rect width='800' height='600' fill='url(#s)'/>` + sun(660, 110, 50, "#fff3cf") +
      `<rect y='250' width='800' height='110' fill='#1aa6bb'/>` +
      `<rect y='350' width='800' height='250' rx='6' fill='url(#p)'/>` +
      `<path d='M0 380 Q200 365 400 380 T800 380' stroke='#bff0f1' stroke-width='4' fill='none' opacity='0.6'/>` +
      `<path d='M0 430 Q200 415 400 430 T800 430' stroke='#bff0f1' stroke-width='4' fill='none' opacity='0.4'/>` +
      `<g fill='#fff'><rect x='70' y='470' width='150' height='18' rx='9'/><rect x='80' y='430' width='40' height='48' rx='8'/><rect x='300' y='470' width='150' height='18' rx='9'/><rect x='310' y='430' width='40' height='48' rx='8'/></g>` +
      palm(700, 360, 1.1, "#0c3b2e"),
  ),
  cocktail: svg(
    `<defs><linearGradient id='s' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#ffb36b'/><stop offset='0.55' stop-color='#ff8a8a'/><stop offset='1' stop-color='#6a5b9a'/></linearGradient></defs>` +
      `<rect width='800' height='600' fill='url(#s)'/>` + sun(400, 250, 64, "#fff0c8") +
      `<rect y='360' width='800' height='240' fill='#2e3f72' opacity='0.8'/>` +
      wave(380, "#3a4f8a", "0.6") +
      `<g transform='translate(400,300)'><path d='M-70 0 L70 0 L8 70 L8 150 L40 170 L-40 170 L-8 150 L-8 70 Z' fill='#ffe3a0' opacity='0.95' stroke='#fff' stroke-width='3'/>` +
      `<circle cx='40' cy='-6' r='16' fill='#ff7a59'/><rect x='44' y='-70' width='4' height='66' fill='#ff7a59'/>` +
      `<rect x='-44' y='-70' width='4' height='70' fill='#7fe3e8'/></g>`,
  ),
  bungalow: svg(
    `<defs><linearGradient id='s' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#bfeaf6'/><stop offset='1' stop-color='#eafaf8'/></linearGradient></defs>` +
      `<rect width='800' height='600' fill='url(#s)'/>` + sun(150, 120, 48, "#fff2c4") +
      `<rect y='320' width='800' height='90' fill='#16c0c8'/>` +
      `<path d='M0 410 Q400 388 800 410 L800 600 L0 600 Z' fill='#e7d6a8'/>` +
      `<g transform='translate(470,250)'><path d='M-120 90 L0 0 L120 90 Z' fill='#7a4a2b'/><rect x='-95' y='88' width='190' height='130' fill='#efe0c4'/><rect x='-30' y='150' width='60' height='68' fill='#6a4a30'/><rect x='-78' y='110' width='40' height='40' fill='#9fd9e6'/><rect x='40' y='110' width='40' height='40' fill='#9fd9e6'/></g>` +
      palm(170, 430, 1.2, "#0c3b2e") + palm(700, 440, 1, "#0f4636"),
  ),
  seaview: svg(
    `<defs><linearGradient id='s' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#cdeef5'/><stop offset='1' stop-color='#eafaf8'/></linearGradient>` +
      `<linearGradient id='w' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#16c0c8'/><stop offset='1' stop-color='#0a6ba8'/></linearGradient></defs>` +
      `<rect width='800' height='600' fill='#efe7d8'/>` +
      `<rect x='70' y='60' width='660' height='430' rx='8' fill='url(#s)'/>` +
      `<rect x='70' y='300' width='660' height='190' fill='url(#w)'/>` + sun(560, 170, 44, "#fff2c4") +
      `<path d='M70 330 Q400 312 730 330' stroke='#7fe3e8' stroke-width='6' fill='none' opacity='0.6'/>` +
      `<path d='M70 380 Q400 364 730 380' stroke='#bff0f1' stroke-width='5' fill='none' opacity='0.5'/>` +
      `<rect x='40' y='488' width='720' height='14' rx='7' fill='#caa874'/>` +
      `<g stroke='#caa874' stroke-width='9'><line x1='150' y1='360' x2='150' y2='490'/><line x1='400' y1='360' x2='400' y2='490'/><line x1='650' y1='360' x2='650' y2='490'/></g>` +
      `<rect x='40' y='372' width='720' height='10' rx='5' fill='#caa874'/>`,
  ),
};

const uri = (name) => "data:image/svg+xml," + encodeURIComponent(scenes[name]);

/* alt-keyword -> scene */
function pick(alt) {
  const a = alt.toLowerCase();
  if (a.includes("sunset over")) return "sunset";
  if (a.includes("garden bungalow")) return "bungalow";
  if (a.includes("superior room")) return "seaview";
  if (a.includes("sea view room")) return "seaview";
  if (a.includes("apartment")) return "pool";
  if (a.includes("reef") && a.includes("diver")) return "reef";
  if (a.includes("coral reef")) return "reef";
  if (a.includes("coral wall")) return "reef";
  if (a.includes("dining")) return "sunset";
  if (a.includes("lagoon")) return "lagoon";
  if (a.includes("overwater")) return "overwater";
  if (a.includes("turtle")) return "reef";
  if (a.includes("pool")) return "pool";
  if (a.includes("cocktail")) return "cocktail";
  return "lagoon";
}

/* ---------- 1. index.html: swap <img> srcs ---------- */
let html = fs.readFileSync("index.html", "utf8");
let count = 0;
html = html.replace(
  /<img([^>]*?)src="https:\/\/images\.unsplash\.com\/[^"]*"([^>]*?)>/g,
  (m, pre, post) => {
    const altMatch = (pre + post).match(/alt="([^"]*)"/);
    const alt = altMatch ? altMatch[1] : "";
    count++;
    return `<img${pre}src="${uri(pick(alt))}"${post}>`;
  },
);
fs.writeFileSync("index.html", html);

/* ---------- 2. css: fix [hidden] + hero background ---------- */
let css = fs.readFileSync("css/styles.css", "utf8");
if (!css.includes("[hidden]")) {
  css = css.replace(
    "* { box-sizing: border-box; }",
    "* { box-sizing: border-box; }\n[hidden] { display: none !important; }",
  );
}
css = css.replace(
  /\.hero-media \{[\s\S]*?\}/,
  `.hero-media {
  position: absolute; inset: 0;
  background: url("${uri("hero")}") center/cover no-repeat, linear-gradient(180deg, #bfeaf6, #16c0c8);
  transform: scale(1.05); animation: heroZoom 18s ease-in-out infinite alternate;
}`,
);
fs.writeFileSync("css/styles.css", css);

console.log("Images embedded:", count, "| scenes:", Object.keys(scenes).length);
console.log("[hidden] rule present:", css.includes("[hidden] { display: none"));
