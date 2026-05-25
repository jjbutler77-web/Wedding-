/* eslint-disable */
const { useState, useEffect, useRef, useMemo, useCallback } = React;

/* ============================================================
   Data
   ============================================================ */
const EVENTS = [
  {
    id: "mehndi",
    num: "I",
    floral: { kind: "marigold", colors: ["coral", "yellow"] },
    title: "Mehndi + Haldi",
    subtitle: "Henna & Turmeric & Music",
    date: "Friday, August 28, 2026",
    time: "5:30 – 10:00 in the evening",
    venue: "Backyard + Pool Event",
    address: "2788 Ridge Park Drive, Tucker, GA 30084",
    dress:
      "Festive and colorful — bright pink, yellow, orange, and purple. South Asian attire is encouraged but not required. Guests may wear a sari, lehenga, salwar kameez, anarkali, kurta, sherwani, or a colorful dress, jumpsuit, suit, or dress shirt.",
    dressNote:
      "Because Haldi involves turmeric, we recommend avoiding delicate all-white clothing or anything you would be heartbroken to stain.",
    swatchColors: ["#f5a93d", "#ee5fd6", "#f53b0e", "#d4148a", "#5e0f3c"],
    illustration: "assets/mehndi-haldi-jhumka.png",
    illustrationAlt: "Hand-drawn henna-style illustration of a jhumka earring",
    blurbs: [
      {
        title: "Mehndi",
        text:
          "A long-loved pre-wedding tradition. Mehndi artists adorn hands with intricate designs while family and friends gather under flowers, snacks, and a small mountain of mithai. The deeper the henna stains, the deeper the love — or so the saying goes."
      },
      {
        title: "Haldi",
        text:
          "A bright ritual with deep roots across South Asia. Loved ones take turns smearing turmeric paste on the bride and groom to cleanse and protect the couple, with each handful meant to carry love and good fortune into the marriage ahead."
      },
      {
        text:
          "Jhumkas (traditional South Asian earrings) will also be available for guests to wear and enjoy."
      },
      {
        note: true,
        text:
          "As part of the evening, women will be offered complimentary single-hand henna designs. Guests who would like a more detailed or intricate design are welcome to request one directly from the henna artist for an additional fee."
      }
    ]
  },
  {
    id: "nikkah",
    num: "II",
    floral: { kind: "jasmine" },
    title: "Nikkah + Khoba Khobi",
    subtitle: "Ceremony & Ritual",
    date: "Saturday, August 29, 2026",
    time: "12:30 – 4:00 in the afternoon",
    venue: "Jamatkhana (Nikkah)",
    address: "685 DeKalb Industrial Way, Decatur, GA 30033",
    venue2Label: "Return to (for Khoba Khobi)",
    venue2Address: "2788 Ridge Park Drive, Tucker, GA 30084",
    dress:
      "Elegant and modest. Pastel and muted pinks, greens, champagne, ivory, beige, and neutrals. Full-length dresses, saris, salwar kameez. Men may wear suits or sherwanis (black is OK for men). A note for guests: no head covering is required, in case you were wondering — come as you are.",
    dressNote:
      "Avoid bright white — this will be for the bride 😊",
    swatchColors: ["#e9b3bd", "#f3d1d4", "#cbd3b6", "#9aa67e", "#ecd6b8"],
    illustration: "assets/nikkah-rings.png",
    illustrationAlt: "Watercolor illustration of two intertwined wedding rings with delicate floral accents",
    blurbs: [
      {
        title: "Nikkah",
        text:
          "The formal religious Ismaili ceremony. It is meaningful, sacred, and yes — there will be paperwork. The bride and groom say \u201CI do\u201D in front of family and friends and officially consent to the marriage contract. The ceremony will be short with time for photos after."
      },
      {
        title: "Khoba Khobi",
        text:
          "A playful tradition where the newlyweds take part in a few lighthearted rituals meant to bless the marriage and determine, at least according to family folklore, who will \u201Crun the household.\u201D We are not naming names, but Jennifer plans to be competitive."
      }
    ]
  },
  {
    id: "wedding",
    num: "III",
    floral: { kind: "hibiscus" },
    title: "Baraat + Reception",
    subtitle: "Ceremony & Reception",
    date: "Saturday, August 29, 2026",
    time: "5:00 – 11:00 in the evening",
    venue: "Kanoon Reception Venue",
    address: "3146 Reps Miller Rd NW, Norcross, GA 30071",
    dress:
      "Bright, colorful, and festive. Think sparkle, jewels, embroidery, sequins, and anything that feels like a celebration. South Asian attire (pull out the lehengas and saris), Caribbean-inspired looks, or cocktail dress / suit + tie are all warmly welcomed. The sky is the limit.",
    dressNote:
      "Please avoid red, as that color is reserved for the bride. No black sherwanis — black suits OK. **All other colors are welcomed.** 😊",
    swatchImage: "assets/baraat-dancer.png",
    swatchImageAlt: "Watercolor illustration of a dancer in a rainbow lehenga with steel drums and palms",
    illustration: "assets/baraat-cocktail.png",
    illustrationAlt: "Watercolor illustration of a pink champagne coupe with a peony and gold ribbon",
    blurbs: [
      {
        title: "Baraat",
        text:
          "The groom's celebratory arrival, traditionally a procession of music, dancing, and as much noise as the family can muster. Ours begins with a mini Baraat in the parking lot out front before we move inside for the ceremony. The louder the welcome, the sweeter the marriage — or so the saying goes."
      },
      {
        title: "Reception",
        text:
          "Dinner, signature cocktails, and a dance floor running on Desi and Caribbean rhythms. Come ready to eat, dance, fete, sparkle, and stay with us late into the evening."
      }
    ]
  }
];

const FAQ = [
  {
    q: "Where should we stay?",
    a: (
      <>
        <p>
          We kept the wedding local to cut down on travel for as many people as possible. A lot of our
          out-of-town guests will be staying with family or friends already. If you are traveling in and
          have not sorted accommodations yet, reach out to us directly and we will point you in the right
          direction (we may also have space at a nearby AirBnB for a small handful of guests — first ask,
          first served).
        </p>
        <p>
          The events are spread across Tucker, Decatur, and Norcross, so anywhere in that triangle puts
          you close to everything.
        </p>
      </>
    )
  },
  {
    q: "Is there transportation to and from the events?",
    a:
      "Sadly, no. We are still poor medical trainees and cannot swing shuttles this round. If you are flying into Atlanta, a rental car is the move. We may be able to help coordinate rides for a few guests with others who are driving, so let us know if that would help."
  },
  {
    q: "What is the parking situation?",
    a: (
      <>
        <p>
          <strong>Friday (Mehndi + Haldi):</strong> Parking is tight. There is limited space in the
          driveway, and per AirBnB rules, no street parking is allowed. Please carpool or rideshare where
          you can.
        </p>
        <p>
          <strong>Saturday (Nikkah, Baraat, Reception):</strong> Plenty of parking right next to the
          venues. No stress.
        </p>
      </>
    )
  },
  {
    q: "What should I wear?",
    kind: "attire"
  },
  {
    q: "Are children welcome?",
    a:
      "Absolutely. Kids are part of the family and we want them there. A lot of our guests have children in the 3-to-7 range, so yours will be in good company. We just ask that you keep an eye on them and make sure they are being kind to the venues — the AirBnB especially, since we want to leave it the way we found it."
  },
  {
    q: "Can we take photos during the events?",
    a: (
      <>
        <p>
          Yes — and we would love to see the day through your eyes. We will have QR codes at each event so
          you can upload your photos to a shared album for us to enjoy after the wedding.
        </p>
        <p>
          One small ask: during the Nikkah itself, please put phones down so our photographer can do their
          job and so the moment stays the moment. Snap away during everything else.
        </p>
      </>
    )
  },
  {
    q: "What about dietary restrictions?",
    a:
      "The reception dinner is buffet style, with chicken and goat as the main proteins. If you would like a vegetarian option, let us know on your RSVP. Same goes for allergies or anything else we should know about — we will do our best to take care of you."
  }
];

/* ============================================================
   Tweak defaults (palette + layout variants)
   ============================================================ */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#c63968",
  "frameShape": "arch",
  "showScrollCue": true,
  "darkMode": "auto"
}/*EDITMODE-END*/;

const ACCENT_PALETTES = {
  coral:     { swatch: "#c95a45", css: "#c95a45" },   // romance, warmth
  pink:      { swatch: "#d97188", css: "#d97188" },   // tenderness, affection
  magenta:   { swatch: "#c63968", css: "#c63968" },   // celebration, passion
  mint:      { swatch: "#5fa888", css: "#5fa888" },   // calm, harmony, renewal
  orange:    { swatch: "#ec8857", css: "#ec8857" }    // joy, warmth, energy
};

/* ============================================================
   Tiny icon set (stroke, currentColor)
   ============================================================ */
const Icon = {
  chevDown: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="6 9 12 15 18 9"/></svg>
  ),
  plus: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
  ),
  check: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...p}><polyline points="20 6 9 17 4 12"/></svg>
  ),
  arrowRight: (p) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  ),
  pin: (p) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...p}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
  )
};

/* ============================================================
   Marigold string — a vertical phool maala threaded with leaves.
   Each event row gets a different bloom color: pink / magenta / coral.
   ============================================================ */
const MARIGOLD_PALETTES = {
  pink:    { outer: "#f3b3c6", mid: "#e58aa6", deep: "#c95f7a", core: "#8f3856" },
  magenta: { outer: "#dd7ba2", mid: "#c63968", deep: "#9b2351", core: "#6b1639" },
  coral:   { outer: "#f0a48d", mid: "#e07a5e", deep: "#bf4a32", core: "#8a3220" },
  ivory:   { outer: "#f5ecd4", mid: "#e6d5a8", deep: "#c9a96b", core: "#8a6f3c" },
  yellow:  { outer: "#f8d76b", mid: "#e8a937", deep: "#b87715", core: "#7a4a08" }
};

function Marigold({ cx, cy, r, palette, rot = 0 }) {
  const { outer, mid, deep, core } = palette;
  // 12 outer petals as small ovals around the ring
  const petals = [];
  const N = 12;
  for (let i = 0; i < N; i++) {
    const a = (i / N) * 360 + rot;
    const rad = (a * Math.PI) / 180;
    const px = cx + Math.cos(rad) * r * 0.78;
    const py = cy + Math.sin(rad) * r * 0.78;
    petals.push(
      <ellipse
        key={i}
        cx={px}
        cy={py}
        rx={r * 0.35}
        ry={r * 0.22}
        fill={outer}
        transform={`rotate(${a + 90} ${px} ${py})`}
        opacity="0.92"
      />
    );
  }
  // 8 mid petals
  const mids = [];
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * 360 + rot + 22;
    const rad = (a * Math.PI) / 180;
    const px = cx + Math.cos(rad) * r * 0.48;
    const py = cy + Math.sin(rad) * r * 0.48;
    mids.push(
      <ellipse
        key={i}
        cx={px}
        cy={py}
        rx={r * 0.3}
        ry={r * 0.2}
        fill={mid}
        transform={`rotate(${a + 90} ${px} ${py})`}
      />
    );
  }
  return (
    <g>
      {/* shadow */}
      <ellipse cx={cx + 0.6} cy={cy + r * 0.9} rx={r * 0.55} ry={r * 0.12} fill="rgba(70,30,30,0.12)" />
      {/* main disc */}
      <circle cx={cx} cy={cy} r={r * 0.95} fill={outer} />
      {petals}
      {mids}
      {/* inner ring */}
      <circle cx={cx} cy={cy} r={r * 0.42} fill={deep} />
      {/* highlight */}
      <ellipse cx={cx - r * 0.18} cy={cy - r * 0.18} rx={r * 0.14} ry={r * 0.08} fill={outer} opacity="0.6" />
      {/* core */}
      <circle cx={cx} cy={cy} r={r * 0.16} fill={core} />
    </g>
  );
}

function Leaflet({ x, y, side = "left", scale = 1 }) {
  const flip = side === "right" ? -1 : 1;
  return (
    <g transform={`translate(${x} ${y}) scale(${flip * scale} ${scale})`}>
      <path
        d="M 0 0 C -6 -2 -10 -7 -8 -14 C -4 -16 0 -12 1 -6 C 1 -3 1 -1 0 0 Z"
        fill="#7a9468"
        stroke="#4f6f43"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
      <path d="M 0 0 L -5 -10" stroke="#4f6f43" strokeWidth="0.4" opacity="0.6" fill="none" />
    </g>
  );
}

function MarigoldString({ colors = ["coral"] }) {
  const palettes = (Array.isArray(colors) ? colors : [colors]).map(
    (c) => MARIGOLD_PALETTES[c] || MARIGOLD_PALETTES.pink
  );
  // 5 marigolds threaded vertically with leaves between
  const blooms = [
    { cx: 0,    cy: -42, r: 9, rot: 0 },
    { cx: 2,    cy: -22, r: 11, rot: 28 },
    { cx: -1,   cy: 0,   r: 12.5, rot: 56 },
    { cx: 1.5,  cy: 22,  r: 11, rot: 84 },
    { cx: 0,    cy: 42,  r: 9, rot: 12 }
  ];
  return (
    <svg className="marigold-string" viewBox="-30 -58 60 116" width="64" height="124" aria-hidden="true">
      <path
        d="M 0 -55 C 1 -45 -1 -32 1 -22 C 2 -10 -1 4 1 16 C 2 28 0 42 0 55"
        stroke="#8a6a3a"
        strokeWidth="0.9"
        fill="none"
        opacity="0.45"
        strokeLinecap="round"
      />
      <Leaflet x={-9} y={-30} side="left" scale={0.95} />
      <Leaflet x={10} y={-10} side="right" scale={1.05} />
      <Leaflet x={-10} y={11} side="left" scale={1} />
      <Leaflet x={9} y={32} side="right" scale={0.9} />
      {blooms.map((b, i) => (
        <Marigold
          key={i}
          cx={b.cx}
          cy={b.cy}
          r={b.r}
          palette={palettes[i % palettes.length]}
          rot={b.rot}
        />
      ))}
    </svg>
  );
}

/* ============================================================
   Jasmine string — small white star flowers strung vertically (gajra).
   ============================================================ */
function JasmineFlower({ cx, cy, r, rot = 0 }) {
  const petals = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * 360 + rot;
    petals.push(
      <ellipse
        key={i}
        cx="0"
        cy={-r * 0.85}
        rx={r * 0.45}
        ry={r * 0.85}
        fill="#fbf6ec"
        stroke="#d8c8a6"
        strokeWidth="0.35"
        transform={`rotate(${a} 0 0)`}
      />
    );
  }
  return (
    <g transform={`translate(${cx} ${cy})`}>
      <ellipse cx="0.4" cy="0.8" rx={r * 0.9} ry={r * 0.25} fill="rgba(70,50,30,0.08)" />
      {petals}
      <circle cx="0" cy="0" r={r * 0.32} fill="#f3e6b8" />
      <circle cx="0" cy="0" r={r * 0.18} fill="#d4b85a" />
      <circle cx={-r * 0.07} cy={-r * 0.07} r={r * 0.06} fill="#fff8da" opacity="0.9" />
    </g>
  );
}

function JasmineBud({ cx, cy, rot = 0 }) {
  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rot})`}>
      <ellipse cx="0" cy="0" rx="2.4" ry="4.5" fill="#faf3df" stroke="#cebf95" strokeWidth="0.35" />
      <path d="M 0 4 L 0 8" stroke="#5a7a4d" strokeWidth="0.7" strokeLinecap="round" />
      <path d="M -1.5 5.5 C -3 7 -4 6 -4.5 5" fill="#7a9468" stroke="#4f6f43" strokeWidth="0.3" />
    </g>
  );
}

function JasmineString() {
  return (
    <svg className="marigold-string jasmine-string" viewBox="-30 -58 60 116" width="64" height="124" aria-hidden="true">
      <path
        d="M 0 -55 C 1 -45 -1 -32 1 -22 C 2 -10 -1 4 1 16 C 2 28 0 42 0 55"
        stroke="#7a8a5a"
        strokeWidth="0.8"
        fill="none"
        opacity="0.55"
        strokeLinecap="round"
      />
      {/* buds tucked between flowers */}
      <JasmineBud cx={-7} cy={-32} rot={-25} />
      <JasmineBud cx={8} cy={-12} rot={20} />
      <JasmineBud cx={-7} cy={10} rot={-15} />
      <JasmineBud cx={8} cy={32} rot={20} />
      {/* main flowers */}
      <JasmineFlower cx={0}    cy={-44} r={7} rot={0} />
      <JasmineFlower cx={1.5}  cy={-22} r={8.5} rot={36} />
      <JasmineFlower cx={-1}   cy={0}   r={10} rot={18} />
      <JasmineFlower cx={1.5}  cy={22}  r={8.5} rot={50} />
      <JasmineFlower cx={0}    cy={44}  r={7} rot={12} />
    </svg>
  );
}

/* ============================================================
   Hibiscus stem — large tropical bloom + smaller second bloom.
   ============================================================ */
const HIBISCUS_PALETTES = {
  magenta: { outer: "#e07ba6", mid: "#c63968", deep: "#9b2351", vein: "#6b1639", throat: "#5a0f2e" },
  pink:    { outer: "#f4c1d2", mid: "#e58aa6", deep: "#c95f7a", vein: "#8f3856", throat: "#a13d5e" }
};

function HibiscusBloom({ cx, cy, r, palette, rot = 0 }) {
  const { outer, mid, deep, vein, throat } = palette;
  const petals = [];
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * 360 + rot;
    petals.push(
      <g key={i} transform={`rotate(${a})`}>
        {/* pointy petal — almond with slight ruffle, tapers to a point at tip */}
        <path
          d={`M 0 0 C ${-r * 0.62} ${-r * 0.22} ${-r * 0.48} ${-r * 0.85} ${-r * 0.04} ${-r * 1.18} L 0 ${-r * 1.24} L ${r * 0.04} ${-r * 1.18} C ${r * 0.48} ${-r * 0.85} ${r * 0.62} ${-r * 0.22} 0 0 Z`}
          fill={mid}
          stroke={deep}
          strokeWidth="0.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {/* petal highlight curve from base toward tip */}
        <path
          d={`M ${-r * 0.05} ${-r * 0.05} C ${-r * 0.35} ${-r * 0.3} ${-r * 0.3} ${-r * 0.75} ${-r * 0.02} ${-r * 1.12}`}
          fill="none"
          stroke={outer}
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.72"
        />
        {/* center vein running to the tip */}
        <path
          d={`M 0 ${-r * 0.04} L 0 ${-r * 1.18}`}
          stroke={vein}
          strokeWidth="0.45"
          opacity="0.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    );
  }
  return (
    <g transform={`translate(${cx} ${cy})`}>
      {petals}
      {/* throat — darker center */}
      <circle cx="0" cy="0" r={r * 0.26} fill={throat} />
      <circle cx="0" cy="0" r={r * 0.16} fill={vein} />
      {/* protruding stamen — signature hibiscus look */}
      <path
        d={`M 0 0 Q ${r * 0.05} ${r * 0.4} ${r * 0.12} ${r * 0.78}`}
        stroke="#f8d76b"
        strokeWidth="1.1"
        fill="none"
        strokeLinecap="round"
      />
      {/* stamen anthers */}
      <circle cx={r * 0.04} cy={r * 0.5} r="0.9" fill="#f8d76b" />
      <circle cx={r * 0.09} cy={r * 0.65} r="0.9" fill="#f8d76b" />
      <circle cx={r * 0.13} cy={r * 0.82} r="1.3" fill="#e8a937" />
    </g>
  );
}

function HibiscusStem() {
  return (
    <svg className="marigold-string hibiscus-stem" viewBox="-30 -58 60 116" width="64" height="124" aria-hidden="true">
      {/* stem */}
      <path
        d="M -8 50 C -4 28 4 10 0 -10 C -3 -28 -2 -42 -6 -52"
        stroke="#5a7a4d"
        strokeWidth="1.4"
        fill="none"
        strokeLinecap="round"
      />
      {/* leaves */}
      <Leaflet x={-12} y={30} side="left" scale={1.2} />
      <Leaflet x={6} y={14} side="right" scale={1.1} />
      <Leaflet x={-10} y={-4} side="left" scale={1} />
      {/* smaller pink bloom (lower) */}
      <HibiscusBloom cx={6} cy={26} r={12} palette={HIBISCUS_PALETTES.pink} rot={20} />
      {/* big magenta bloom (upper) */}
      <HibiscusBloom cx={-2} cy={-22} r={17} palette={HIBISCUS_PALETTES.magenta} rot={-8} />
      {/* bud at very top */}
      <g transform="translate(-7 -50)">
        <path d="M 0 0 C -3 -3 -3 -8 0 -12 C 3 -8 3 -3 0 0 Z" fill="#c63968" stroke="#9b2351" strokeWidth="0.5" />
        <path d="M 0 0 C -4 1 -6 -2 -5 -5" fill="#6e8c5a" stroke="#4f6f43" strokeWidth="0.4" />
      </g>
    </svg>
  );
}

/* ============================================================
   Watercolor swatch — vertical stack of brushstroke ovals.
   Uses feTurbulence + feDisplacementMap to give edges the
   irregular bleed of pigment on watercolor paper, with three
   stacked opacity layers per stroke for pooled pigment depth.
   ============================================================ */
let __wcSwatchUid = 0;
function WatercolorSwatch({ colors, strokeW = 78, strokeH = 26, gap = 12, orientation = "column" }) {
  const id = React.useMemo(() => `wc-swatch-${++__wcSwatchUid}`, []);
  const isRow = orientation === "row";
  const pad = 12;
  const W = isRow ? colors.length * (strokeW + gap) - gap + pad * 2 : strokeW + pad * 2;
  const H = isRow ? strokeH + pad * 2 : colors.length * (strokeH + gap) - gap + pad * 2;
  return (
    <svg
      className="watercolor-swatch"
      viewBox={`0 0 ${W} ${H}`}
      width={W}
      height={H}
      aria-hidden="true"
    >
      <defs>
        <filter id={`${id}-bleed`} x="-10%" y="-30%" width="120%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.045 0.09" numOctaves="2" seed="3" />
          <feDisplacementMap in="SourceGraphic" scale="9" />
        </filter>
        <filter id={`${id}-edge`} x="-10%" y="-30%" width="120%" height="160%">
          <feTurbulence type="fractalNoise" baseFrequency="0.08 0.14" numOctaves="3" seed="11" />
          <feDisplacementMap in="SourceGraphic" scale="4" />
        </filter>
      </defs>
      {colors.map((color, i) => {
        const cx = isRow ? pad + i * (strokeW + gap) + strokeW / 2 : pad + strokeW / 2;
        const cy = isRow ? pad + strokeH / 2 : pad + i * (strokeH + gap) + strokeH / 2;
        const tilt = ((i * 7) % 5 - 2) * 0.6;
        const offX = ((i * 13) % 7 - 3) * 0.5;
        return (
          <g key={i} transform={`translate(${offX} 0) rotate(${tilt} ${cx} ${cy})`}>
            <ellipse
              cx={cx} cy={cy}
              rx={strokeW * 0.46} ry={strokeH * 0.48}
              fill={color} opacity="0.32"
              filter={`url(#${id}-bleed)`}
            />
            <ellipse
              cx={cx + 1} cy={cy + 1}
              rx={strokeW * 0.4} ry={strokeH * 0.42}
              fill={color} opacity="0.55"
              filter={`url(#${id}-edge)`}
            />
            <ellipse
              cx={cx - 1} cy={cy - 0.5}
              rx={strokeW * 0.32} ry={strokeH * 0.32}
              fill={color} opacity="0.78"
              filter={`url(#${id}-edge)`}
            />
          </g>
        );
      })}
    </svg>
  );
}

/* ============================================================
   Floral SVG — quick stylized arrangement using inline circles
   so we don't need real flower assets. Keeps composition delicate.
   ============================================================ */
function FloralFlourish({ side = "left" }) {
  // mirrored if side="right"
  const transform = side === "right" ? "scale(-1,1) translate(-200,0)" : "";
  return (
    <svg width="200" height="180" viewBox="0 0 200 180" style={{ overflow: "visible" }}>
      <g transform={transform}>
        {/* stem */}
        <path d="M30,170 C 40,120 50,80 90,40" fill="none" stroke="#7e8e6b" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M40,150 C 60,140 80,140 100,130" fill="none" stroke="#7e8e6b" strokeWidth="1" strokeLinecap="round"/>
        {/* leaves */}
        <ellipse cx="55" cy="120" rx="8" ry="3" fill="#7e8e6b" opacity="0.7" transform="rotate(-30 55 120)"/>
        <ellipse cx="68" cy="92" rx="9" ry="3.4" fill="#9aab86" opacity="0.75" transform="rotate(-45 68 92)"/>
        <ellipse cx="80" cy="65" rx="7" ry="3" fill="#7e8e6b" opacity="0.7" transform="rotate(-55 80 65)"/>
        {/* florals — coral cluster */}
        <g opacity="0.95">
          <circle cx="90" cy="36" r="9" fill="#e8856e"/>
          <circle cx="98" cy="30" r="6" fill="#f0a78a"/>
          <circle cx="84" cy="28" r="5" fill="#c95a45"/>
          <circle cx="96" cy="42" r="4" fill="#e3a23a"/>
          <circle cx="78" cy="40" r="3.5" fill="#c63968"/>
          <circle cx="104" cy="38" r="3" fill="#e3a23a"/>
        </g>
        <g opacity="0.92">
          <circle cx="40" cy="148" r="5" fill="#e8856e"/>
          <circle cx="46" cy="155" r="3.5" fill="#c63968"/>
        </g>
      </g>
    </svg>
  );
}

/* ============================================================
   Hero
   ============================================================ */
function Hero({ onScroll, tweaks }) {
  return (
    <section className="hero" id="home" data-screen-label="01 Hero">
      <div className="hero-img">
        <img
          src="assets/jennifer-salman-hero.jpg"
          alt="Jennifer and Salman holding hands beneath an arch, overlooking a garden pond"
        />
      </div>
      <div className="hero-content">
        <div className="hero-names">
          <span>Jennifer</span>
          <span className="amp">&amp;</span>
          <span>Salman</span>
        </div>
        <div className="hero-eyebrow">Together with our families</div>
        <div className="hero-date">
          <span>Twenty-Eight thru Twenty-Nine</span>
          <span className="dot"></span>
          <span>August</span>
          <span className="dot"></span>
          <span>Two Thousand Twenty-Six</span>
        </div>
        <div className="hero-location">Atlanta, GA</div>
      </div>
      {tweaks.showScrollCue && (
        <button className="scroll-cue" onClick={onScroll} aria-label="Scroll to next section">
          <span className="scroll-cue-text">Our Story</span>
          <span className="scroll-cue-line"></span>
        </button>
      )}
    </section>
  );
}

/* ============================================================
   Welcome
   ============================================================ */
function Welcome({ tweaks }) {
  const frameRadius = tweaks.frameShape === "arch"
    ? "240px 240px 8px 8px"
    : tweaks.frameShape === "oval"
      ? "9999px"
      : "8px";
  const innerRadius = tweaks.frameShape === "arch"
    ? "220px 220px 4px 4px"
    : tweaks.frameShape === "oval"
      ? "9999px"
      : "4px";

  return (
    <section className="welcome section" id="about" data-screen-label="02 Welcome">
      <div className="section-head">
        <div className="eyebrow">A note from the couple</div>
        <h2 className="section-title">
          <span className="script">Welcome</span>
          <br/>
          Dear Ones
        </h2>
        <div className="welcome-greetings">
          <span>Willkommen</span>
          <span className="sep">·</span>
          <span lang="fa" dir="rtl">خوش آمدید</span>
          <span className="sep">·</span>
          <span lang="vi">Chào mừng</span>
          <span className="sep">·</span>
          <span lang="yo">Ẹ káàbọ̀</span>
          <span className="sep">·</span>
          <span lang="es">Bienvenidos</span>
          <span className="sep">·</span>
          <span lang="hi">स्वागत है</span>
          <span className="sep">·</span>
          <span lang="ko">어서 오세요</span>
        </div>
      </div>

      <div className="welcome-frame-wrap">
        <div className="welcome-frame" style={{ borderRadius: frameRadius }}>
          <div className="welcome-frame-inner" style={{ borderRadius: innerRadius }}>
            <img
              className="welcome-portrait-img"
              src="assets/welcome-portrait.jpg"
              alt="Jennifer and Salman embracing on the bridge at the Atlanta Botanical Garden"
            />
          </div>
        </div>
      </div>

      <p className="welcome-body">
        When Jennifer least expected it, Salman won the heart of this stubborn German-Caribbean girl with his
        kindness, steadiness, and the kind of love that made everything feel a little more possible.
      </p>
      <p className="welcome-body" style={{ marginTop: 16 }}>
        On the weekend of August twenty-ninth, we are celebrating our marriage and are inviting you to come along
        for two days of food, music, and festivities. We have planned a weekend that honors both our cultures and
        cannot wait to share it with the people we love the most.
      </p>
      <div className="welcome-signoff">
        <span className="welcome-signoff-love">Love,</span>
        <span className="welcome-signoff-names">Jennifer + Salman</span>
      </div>
    </section>
  );
}

/* ============================================================
   Events Grid
   ============================================================ */
function renderInlineBold(text) {
  // Split on **...** markers and bold the wrapped segments
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    const m = p.match(/^\*\*([^*]+)\*\*$/);
    return m ? <strong key={i}>{m[1]}</strong> : p;
  });
}

function EventRow({ event, open, onToggleOpen, selected, onToggleSelect }) {
  return (
    <div className={`event-row ${open ? "is-open" : ""} ${selected ? "is-selected" : ""}`}>
      <div
        className="event-summary"
        onClick={(e) => {
          // don't open when clicking the RSVP toggle
          if (e.target.closest(".rsvp-toggle")) return;
          onToggleOpen();
        }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onToggleOpen(); } }}
      >
        <div className="event-num">
          {event.floral?.kind === "jasmine" && <JasmineString />}
          {event.floral?.kind === "hibiscus" && <HibiscusStem />}
          {(!event.floral || event.floral.kind === "marigold") && (
            <MarigoldString colors={event.floral?.colors || ["coral"]} />
          )}
        </div>
        <div>
          <div className="event-title">{event.title}</div>
          <div className="event-subtitle">{event.subtitle}</div>
        </div>
        <div className="event-meta-stack">
          <div className="strong">{event.date}</div>
          <div>{event.time}</div>
        </div>
        <div className="event-action">
          <button
            className={`rsvp-toggle ${selected ? "is-on" : ""}`}
            onClick={(e) => { e.stopPropagation(); onToggleSelect(); }}
            aria-pressed={selected}
          >
            <span className="dot" aria-hidden="true"></span>
            <span className="label">{selected ? "Added to RSVP" : "Add to my RSVP"}</span>
          </button>
          <span className="expand-chev" aria-hidden="true"><Icon.chevDown /></span>
        </div>
      </div>

      <div className="event-detail" aria-hidden={!open}>
        <div className="event-detail-inner">
          {event.blurbs ? (
            <div className="event-detail-rich">
              {event.subtitleLine && (
                <div className="event-tagline">— {event.subtitleLine} —</div>
              )}

              <div className="event-facts-stacked">
                <div>
                  <div className="fact-label">Venue</div>
                  <div className="fact-value">{event.venue}</div>
                  <div className="fact-sub">{event.address}</div>
                  {event.venue2Address && (
                    <div className="venue-secondary">
                      <div className="fact-label">{event.venue2Label || "Return to"}</div>
                      <div className="fact-sub">{event.venue2Address}</div>
                    </div>
                  )}
                </div>
                <div className="dress-block">
                  <div className="fact-label">Dress Code</div>
                  <div className="fact-value">{event.dress}</div>
                  {event.dressNote && (
                    <div className="fact-note">
                      <strong>**</strong> {renderInlineBold(event.dressNote)}
                    </div>
                  )}
                  {event.swatchImage ? (
                    <div className="dress-swatch dress-swatch--image">
                      <img src={event.swatchImage} alt={event.swatchImageAlt || ""} />
                    </div>
                  ) : event.swatchColors && (
                    <div className="dress-swatch dress-swatch--row">
                      <WatercolorSwatch colors={event.swatchColors} orientation="row" />
                    </div>
                  )}
                </div>
              </div>

              <div className="event-blurbs event-blurbs--centered">
                {event.blurbs.map((b, i) => (
                  <p key={i} className={`event-blurb-line ${b.note ? "is-note" : ""}`}>
                    {b.title && <strong className="blurb-title">{b.title}: </strong>}
                    {b.note && <em>*</em>}
                    {b.text}
                  </p>
                ))}
              </div>

              {event.illustration && (
                <figure className="event-illustration event-illustration--below">
                  <img src={event.illustration} alt={event.illustrationAlt || ""} />
                </figure>
              )}
            </div>
          ) : (
            <div className="event-detail-grid">
              <div className="spacer" aria-hidden="true"></div>
              <div>
                <div className="event-facts">
                  <div>
                    <div className="fact-label">Venue</div>
                    <div className="fact-value">{event.venue}</div>
                    <div className="fact-value" style={{ fontSize: 15, color: "var(--w-ink-40)", marginTop: 4 }}>
                      {event.address}
                    </div>
                  </div>
                  <div>
                    <div className="fact-label">Dress</div>
                    <div className="fact-value">{event.dress}</div>
                  </div>
                </div>
              </div>
              <div>
                <p className="event-blurb">{event.blurb}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Events({ openId, setOpenId, selected, toggleSelected }) {
  return (
    <section className="events" id="events" data-screen-label="03 Events">
      <div className="events-inner">
        <div className="section-head">
          <div className="eyebrow">Three events, one weekend</div>
          <h2 className="section-title">
            The <span className="script">celebrations</span>
          </h2>
          <p className="section-sub">
            We have planned three gatherings across the long weekend. Come to all of them, come to one — every
            event is a separate yes. Tap a card to read more.
          </p>
        </div>

        <div className="event-list">
          {EVENTS.map((ev) => (
            <EventRow
              key={ev.id}
              event={ev}
              open={openId === ev.id}
              onToggleOpen={() => setOpenId(openId === ev.id ? null : ev.id)}
              selected={!!selected[ev.id]}
              onToggleSelect={() => toggleSelected(ev.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
   ============================================================ */
/* ============================================================
   FAQ
   ============================================================ */
function AttireFigure({ kind }) {
  const srcs = {
    sari:     "assets/attire-sari.jpg",
    lehenga:  "assets/attire-lehenga.jpg",
    salwar:   "assets/attire-salwar.jpg",
    sharara:  "assets/attire-sharara.jpg",
    sherwani: "assets/attire-sherwani.jpg",
    jodhpuri: "assets/attire-jodhpuri.jpg"
  };
  const src = srcs[kind];
  if (!src) return null;
  return <img className="attire-fig" src={src} alt="" />;
}

const ATTIRE_WOMEN = [
  { id: "sari",    name: "Sari",    note: "A long unstitched fabric draped around the body with a fitted blouse and an inner skirt. Endless variations in fabric and draping style." },
  { id: "lehenga", name: "Lehenga", note: "A cropped fitted top (choli) paired with a long flowing skirt and a dupatta. The most celebratory of the silhouettes — built for twirling." },
  { id: "salwar",  name: "Salwar Kameez", note: "A long tunic (kameez) over slim or loose pants (salwar) with a dupatta scarf. The most comfortable option, day to night." },
  { id: "sharara", name: "Sharara Set",   note: "A short tunic over wide, flared bell-bottom pants. Modern, elegant, and very photogenic on a dance floor." }
];
const ATTIRE_MEN = [
  { id: "sherwani", name: "Sherwani", note: "A long, ankle-length coat over slim trousers with a stand-up collar. The classic groomswear silhouette — pair with a colorful pocket square." },
  { id: "jodhpuri", name: "Jodhpuri", note: "A short structured jacket with a mandarin collar over fitted trousers. Sometimes called an \u201CIndian tuxedo.\u201D Sharp and modern." }
];

const ATTIRE_WEBSITES = [
  { name: "Andaaz Fashion",      url: "https://www.andaazfashion.com" },
  { name: "Khaadi US",            url: "https://us.khaadi.com" },
  { name: "Ethnos",               url: "https://www.shopethnos.com" },
  { name: "Lashkaraa",            url: "https://www.lashkaraa.com" },
  { name: "Kalki Fashion",        url: "https://www.kalkifashion.com" },
  { name: "Aza Fashions",         url: "https://www.azafashions.com/en-us" },
  { name: "Manyavar",             url: "https://www.manyavar.com/en-us" },
  { name: "Cbazaar",              url: "https://www.cbazaar.com" }
];

function AttireGroup({ title, items }) {
  const [activeId, setActiveId] = useState(items[0].id);
  const active = items.find((g) => g.id === activeId) || items[0];
  return (
    <div className="attire-group">
      <h4 className="attire-group-title">{title}</h4>
      <div className="attire-gallery">
        <div className="attire-main">
          <div className="attire-main-figure">
            <AttireFigure kind={active.id} />
          </div>
          <div className="attire-main-meta">
            <div className="attire-main-name">{active.name}</div>
            <p className="attire-main-note">{active.note}</p>
          </div>
        </div>
        <ul className="attire-list">
          {items.map((g) => (
            <li key={g.id}>
              <button
                className={`attire-chip ${g.id === activeId ? "is-active" : ""}`}
                onClick={() => setActiveId(g.id)}
              >
                <span className="attire-chip-fig"><AttireFigure kind={g.id} /></span>
                <span className="attire-chip-name">{g.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function AttireSection() {
  return (
    <div className="attire-section">
      <p>
        You are more than welcome to wear full South Asian attire, but absolutely no pressure. Western
        formalwear and other traditional attire are all fair game. The one ask: stick to the color palette
        listed under each event (and please, no white or red on Saturday — that&rsquo;s the bride&rsquo;s).
        And no black sherwanis — that&rsquo;s for the groom!
      </p>
      <p>
        For anyone who wants to wear desi clothes and is not sure where to start, scroll down for outfit
        ideas and a few websites we recommend.
      </p>

      <AttireGroup title="Women" items={ATTIRE_WOMEN} />
      <AttireGroup title="Men" items={ATTIRE_MEN} />

      <div className="attire-shop">
        <h4 className="attire-group-title">Where to shop online</h4>
        <ul className="attire-links">
          {ATTIRE_WEBSITES.map((w) => (
            <li key={w.url}>
              <a href={w.url} target="_blank" rel="noopener noreferrer">{w.name}</a>
            </li>
          ))}
        </ul>

        <h4 className="attire-group-title" style={{ marginTop: 24 }}>In-store options</h4>
        <div className="attire-instore">
          <div>
            <div className="attire-instore-loc">Decatur</div>
            <div className="attire-instore-list">Traditional Vogue · Texas Sari Sapne · Riya&rsquo;s Exclusive</div>
          </div>
          <div>
            <div className="attire-instore-loc">Norcross</div>
            <div className="attire-instore-list">Global Mall</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ item, open, onToggle }) {
  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button className="faq-q" onClick={onToggle} aria-expanded={open}>
        <span>{item.q}</span>
        <span className="chev" aria-hidden="true"><Icon.plus /></span>
      </button>
      <div className="faq-a" aria-hidden={!open}>
        <div className="faq-a-inner">
          {item.kind === "attire" ? (
            <AttireSection />
          ) : (
            <div className="faq-a-text">{item.a}</div>
          )}
        </div>
      </div>
    </div>
  );
}

function Faq() {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <section className="faq section section--narrow" id="faq" data-screen-label="04 FAQ">
      <div className="section-head">
        <div className="eyebrow">Good to know</div>
        <h2 className="section-title">
          A few <span className="script">questions,</span>
          <br/>
          answered
        </h2>
      </div>
      <div className="faq-list">
        {FAQ.map((item, i) => (
          <FaqItem
            key={i}
            item={item}
            open={openIdx === i}
            onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   RSVP Form
   ============================================================ */
function Check({ on, onChange, children }) {
  return (
    <div
      className={`check-row ${on ? "is-on" : ""}`}
      onClick={onChange}
      role="checkbox"
      aria-checked={on}
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onChange(); } }}
    >
      <span className="box" aria-hidden="true"><Icon.check /></span>
      <div className="copy">{children}</div>
    </div>
  );
}

function Rsvp({ selected, toggleSelected, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [songRequest, setSongRequest] = useState("");
  const [plusOne, setPlusOne] = useState(false);
  const [plusOneName, setPlusOneName] = useState("");
  const [children, setChildren] = useState("");
  const [veggie, setVeggie] = useState(false);
  const [allergies, setAllergies] = useState("");
  const [agreed, setAgreed] = useState(false);

  const selectedEvents = EVENTS.filter((e) => selected[e.id]);
  const guestCount = 1 + (plusOne && plusOneName.trim() ? 1 : 0);

  const canSubmit = name.trim() && email.trim() && selectedEvents.length > 0 && agreed;

  function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    onSubmit({
      name, email,
      songRequest: songRequest.trim() || null,
      plusOne: plusOne && plusOneName.trim() ? plusOneName.trim() : null,
      children: children.trim() || null,
      veggie, allergies,
      agreed,
      events: selectedEvents
    });
  }

  return (
    <section className="rsvp" id="rsvp" data-screen-label="05 RSVP">
      <div className="rsvp-inner">
        <div className="section-head">
          <div className="eyebrow">The final step</div>
          <h2 className="section-title">
            Send <span className="script">your reply</span>
          </h2>
          <p className="section-sub">
            Please respond by <strong style={{ color: "var(--w-ink)" }}>July 15, 2026</strong>. If anything
            changes after, just write — we will make it work.
          </p>
        </div>

        <form className="rsvp-card" onSubmit={handleSubmit}>
          {/* Dynamic summary */}
          <div className="rsvp-summary">
            <div className="summary-label">You are saying yes to</div>
            {selectedEvents.length === 0 ? (
              <div className="summary-empty">
                Tap a celebration above to add it to your reply.
              </div>
            ) : (
              <>
                <div className="summary-list">
                  {selectedEvents.map((ev) => (
                    <div key={ev.id} className="summary-line">
                      <span>{ev.title} <span style={{ color: "var(--w-ink-40)" }}>· {ev.subtitle}</span></span>
                      <span className="when">{ev.date.split(",")[0]}</span>
                    </div>
                  ))}
                </div>
                <div className="summary-count">
                  <span>{selectedEvents.length === 1 ? "1 event" : `${selectedEvents.length} events`}</span>
                  <span><strong>{guestCount}</strong> {guestCount === 1 ? "guest" : "guests"} attending</span>
                </div>
              </>
            )}
          </div>

          {/* Fields */}
          <div className="field-grid">
            <div className="field">
              <label htmlFor="rsvp-name">Your name</label>
              <input
                id="rsvp-name"
                type="text"
                placeholder="As it appears on your invitation"
                value={name}
                onChange={(e) => setName(e.target.value)}
                autoComplete="name"
              />
            </div>
            <div className="field">
              <label htmlFor="rsvp-email">Email</label>
              <input
                id="rsvp-email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
              />
            </div>

            <div className="field field--full">
              <label htmlFor="rsvp-song">DJ request</label>
              <input
                id="rsvp-song"
                type="text"
                placeholder="Include artist and title (e.g. Kes — Hello)"
                value={songRequest}
                onChange={(e) => setSongRequest(e.target.value)}
              />
            </div>

            <div className="field field--full">
              <Check on={plusOne} onChange={() => setPlusOne(!plusOne)}>
                I'd like to bring a plus one
                <span className="hint">Please add their name below. Also include the number of any children attending.</span>
              </Check>
              <div className={`plus-one-wrap ${plusOne ? "is-open" : ""}`}>
                <div>
                  <div className="field-grid" style={{ paddingTop: 8 }}>
                    <div className="field">
                      <label htmlFor="rsvp-plus">Plus one's name</label>
                      <input
                        id="rsvp-plus"
                        type="text"
                        placeholder="Their full name"
                        value={plusOneName}
                        onChange={(e) => setPlusOneName(e.target.value)}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="rsvp-children">Children attending</label>
                      <input
                        id="rsvp-children"
                        type="number"
                        min="0"
                        inputMode="numeric"
                        placeholder="0"
                        value={children}
                        onChange={(e) => setChildren(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="field field--full">
              <Check on={veggie} onChange={() => setVeggie(!veggie)}>
                I require a vegetarian diet
              </Check>
            </div>

            <div className="field field--full">
              <label htmlFor="rsvp-allergies">Severe allergies or anything else we should know</label>
              <input
                id="rsvp-allergies"
                type="text"
                placeholder="Optional — e.g. nut allergy, gluten-free, halal"
                value={allergies}
                onChange={(e) => setAllergies(e.target.value)}
              />
            </div>
          </div>

          {/* Legal — Comprehensive Release of Liability */}
          <div className="legal">
            <div className="legal-label">
              <span className="legal-req" aria-hidden="true">Required</span>
              Release of Liability
            </div>
            <div className="legal-scroll" tabIndex={0} role="region" aria-label="Comprehensive Release of Liability and Indemnity Agreement">
              <p>
                By checking this box and attending the events celebrating Jennifer and Salman leading up to
                August 28, 2026, I (the "Guest") acknowledge and agree to this Comprehensive Release of
                Liability, Assumption of Risk, and Indemnity Agreement.
              </p>
              <p>
                <strong>1. Assumption of All Risks.</strong> I knowingly and freely assume all risks, both
                known and unknown, arising from my attendance at these events. This includes, but is not
                limited to, risks associated with the premises, slip and falls, property damage, food or
                beverage consumption (including allergic reactions or alcohol consumption), transportation to
                and from the venue, acts of nature, and the actions or negligence of other guests or
                third-party vendors.
              </p>
              <p>
                <strong>2. Complete Release of Liability.</strong> I hereby fully and forever release, waive,
                discharge, and covenant not to sue Jennifer, Salman, their respective parents, immediate
                families, agents, or property owners (the "Released Parties") from any and all liability,
                claims, demands, or causes of action — including those arising from the negligence of the
                Released Parties — resulting in personal injury, property damage, or death.
              </p>
              <p>
                <strong>3. Indemnification and Fee-Shifting.</strong> If I, or anyone acting on my behalf
                (including family members, heirs, or assigns), initiates any form of legal action, lawsuit,
                or claim against the Released Parties, I agree to fully indemnify and hold them harmless.
                This means I agree to pay for 100% of the legal costs, attorney's fees, and court costs
                incurred by the Released Parties in defending against such an action.
              </p>
              <p>
                <strong>4. Mandatory Binding Arbitration and Jury Trial Waiver.</strong> Any dispute, claim,
                or controversy arising out of or relating to this agreement, or my attendance at the events,
                shall be resolved exclusively through mandatory, binding arbitration administered in the
                State of Georgia, rather than in a court of law. I expressly waive my right to file a lawsuit
                in public court and my right to a trial by jury. This agreement shall be governed by and
                construed in accordance with the laws of the State of Georgia. The exclusive venue for any
                necessary legal proceedings to enforce this arbitration agreement shall be the state or
                federal courts located in the county where the event takes place.
              </p>
              <p>
                <strong>5. Scope of Release.</strong> This release applies strictly to ordinary negligence.
                It does not waive liability for gross negligence, willful misconduct, or wanton misconduct by
                the Released Parties.
              </p>
              <p>
                <strong>6. Plus-Ones and Dependents.</strong> By completing this RSVP and selecting a
                Plus-One, I certify that I have shared these terms with my guest and possess the authority to
                bind them to this agreement. If my Plus-One or accompanying minor pursues legal action
                against the Released Parties, I agree to personally indemnify and hold the Released Parties
                harmless for all associated legal fees, court costs, and damages.
              </p>
              <p>
                <strong>7. Severability.</strong> If any provision of this agreement is held to be invalid,
                illegal, or unenforceable under Georgia law, the remaining provisions shall continue to be
                fully valid and enforceable to the maximum extent permitted by law.
              </p>
            </div>
            <div
              className={`check-row legal-check ${agreed ? "is-on" : ""}`}
              onClick={() => setAgreed(!agreed)}
              role="checkbox"
              aria-checked={agreed}
              aria-required="true"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setAgreed(!agreed); } }}
            >
              <span className="box" aria-hidden="true"><Icon.check /></span>
              <div className="copy">
                <strong>
                  I have read, understand, and agree to the Comprehensive Release of Liability and Indemnity
                  Agreement.
                </strong>
              </div>
            </div>
          </div>

          <div className="submit-row">
            <p className="submit-note">
              We will send a confirmation to your email.
            </p>
            <button type="submit" className="btn btn-primary" disabled={!canSubmit}>
              Submit RSVP <Icon.arrowRight />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ============================================================
   Confirmation Modal
   ============================================================ */
function ConfirmationModal({ open, onClose, payload }) {
  // Lock scroll while open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const firstName = payload?.name?.split(" ")[0] || "friend";

  return (
    <div className={`modal-backdrop ${open ? "is-open" : ""}`} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <span className="corner-bl" aria-hidden="true"></span>
        <span className="corner-br" aria-hidden="true"></span>

        <div className="modal-script">You're in.</div>
        <div className="modal-title">Thank you, {firstName}</div>

        <p className="modal-body">
          We are absolutely thrilled to celebrate with you. A reply has been sent to your inbox, and you will
          hear from us again with travel notes a few weeks before the weekend.
        </p>

        <div className="modal-divider">
          <span></span>
          <span className="dot"></span>
          <span></span>
        </div>

        <p className="modal-body">
          A quick note on gifts: our home is fully furnished — <em>please, no toasters</em>. Your presence is
          truly the greatest gift we could ask for. If you'd still like to contribute to our future together,
          a small cash gift would be deeply appreciated.
        </p>

        <button className="btn modal-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

/* ============================================================
   Nav
   ============================================================ */
function Nav({ activeSection, onJump, onTweaks }) {
  const links = [
    { id: "about", label: "About" },
    { id: "events", label: "Events" },
    { id: "faq", label: "FAQ" },
    { id: "rsvp", label: "RSVP" }
  ];
  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-mark" onClick={(e) => { e.preventDefault(); onJump("home"); }}>
          <span>Jennifer</span><span className="amp">&amp;</span><span>Salman</span>
        </a>
        <nav className="nav-links">
          {links.map((l) => (
            <a key={l.id}
               className={`nav-link ${activeSection === l.id ? "active" : ""}`}
               onClick={(e) => { e.preventDefault(); onJump(l.id); }}>
              {l.label}
            </a>
          ))}
        </nav>
        <button className="nav-cta" onClick={() => onJump("rsvp")}>Reply</button>
      </div>
    </header>
  );
}

/* ============================================================
   Footer
   ============================================================ */
function AtlantaSkyline() {
  return (
    <>
      <img
        className="skyline skyline--day"
        src="assets/atlanta-skyline-day.jpg"
        alt="Watercolor illustration of the Atlanta skyline with cherry blossoms and azaleas in bloom"
      />
      <img
        className="skyline skyline--night"
        src="assets/atlanta-skyline.jpg"
        alt="Watercolor illustration of the Atlanta skyline at night, with the SkyView Ferris wheel and Mercedes-Benz Stadium"
      />
    </>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="script">Forever begins.</div>
      <div className="names">JENNIFER &amp; SALMAN</div>
      <div className="date">August 28 &ndash; 29 · 2026 · Atlanta, Georgia</div>
      <AtlantaSkyline />
    </footer>
  );
}

/* ============================================================
   Tweaks
   ============================================================ */
function Tweaks({ tweaks, setTweak }) {
  return (
    <TweaksPanel>
      <TweakSection label="Welcome frame" />
      <TweakRadio
        label="Shape"
        value={tweaks.frameShape}
        onChange={(v) => setTweak("frameShape", v)}
        options={[
          { value: "arch", label: "Arch" },
          { value: "oval", label: "Oval" },
          { value: "rect", label: "Rect" }
        ]}
      />

      <TweakSection label="Hero" />
      <TweakToggle
        label="Scroll cue"
        value={tweaks.showScrollCue}
        onChange={(v) => setTweak("showScrollCue", v)}
      />

      <TweakSection label="Theme" />
      <TweakRadio
        label="Mode"
        value={tweaks.darkMode || "auto"}
        options={["auto", "day", "night"]}
        onChange={(v) => setTweak("darkMode", v)}
      />

      <TweakSection label="Diagnostics" />
      <TweakButton
        label="Send test RSVP to Google Form"
        onClick={() => {
          submitToGoogleForm({
            name: "Test Guest (please delete)",
            email: "test@example.com",
            songRequest: "Kes — Hello",
            plusOne: "Test Plus One",
            children: "2",
            veggie: true,
            allergies: "No allergies — this is a test submission",
            agreed: true,
            events: [
              { id: "mehndi" },
              { id: "nikkah" },
              { id: "wedding" }
            ]
          }).then(() => {
            window.alert(
              "Test submission sent.\n\nCheck your linked Google Sheet — a new row " +
              "should appear within ~10 seconds.\n\nIf nothing shows up, the form " +
              "is rejecting the request — likely because Accepting Responses is off " +
              "or sign-in is required."
            );
          });
        }}
      />
    </TweaksPanel>
  );
}

/* ============================================================
   Falling petals (day theme overlay)
   ============================================================ */
function FallingPetals() {
  const petals = React.useMemo(() => {
    const arr = [];
    const N = 22;
    const colors = ["pink", "magenta", "white"];
    for (let i = 0; i < N; i++) {
      arr.push({
        x: ((i * 7.31) * 13.7) % 100,
        size: 10 + ((i * 5) % 8),                              // smaller, 10-17px
        fallDelay: -(((i * 0.91) % 18)).toFixed(2),
        fallDuration: (15 + ((i * 0.41) % 10)).toFixed(1),     // slower
        swayDuration: (5 + ((i * 0.17) % 4)).toFixed(1),
        swayDelay: -(((i * 0.31) % 4)).toFixed(2),
        spinDuration: (10 + ((i * 0.23) % 8)).toFixed(1),      // slower spin
        spinDelay: -(((i * 0.13) % 5)).toFixed(2),
        drift: ((i * 17) % 120 - 60).toFixed(0) + "px",
        color: colors[i % colors.length],
        shape: i % 2                                            // only delicate shapes
      });
    }
    return arr;
  }, []);
  return (
    <div className="petal-field" aria-hidden="true">
      {petals.map((p, i) => (
        <span
          key={i}
          className={`petal petal--${p.color}`}
          style={{
            "--x": p.x + "vw",
            "--sz": p.size + "px",
            "--fall-dur": p.fallDuration + "s",
            "--fall-delay": p.fallDelay + "s",
            "--sway-dur": p.swayDuration + "s",
            "--sway-delay": p.swayDelay + "s",
            "--spin-dur": p.spinDuration + "s",
            "--spin-delay": p.spinDelay + "s",
            "--drift": p.drift
          }}
        >
          <span className="petal-inner">
            <PetalShape shape={p.shape} />
          </span>
        </span>
      ))}
    </div>
  );
}

function PetalShape({ shape = 0 }) {
  if (shape === 0) {
    // Slim delicate petal — narrow teardrop, soft white veining
    return (
      <svg viewBox="0 0 20 28">
        <path
          d="M 10 1 C 6 7, 5 18, 8.5 25.5 C 9.5 27, 10.5 27, 11.5 25.5 C 15 18, 14 7, 10 1 Z"
          fill="currentColor"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="0.35"
        />
        <path d="M 10 4 Q 9 14, 10 24" stroke="rgba(255,255,255,0.55)" strokeWidth="0.35" fill="none" />
      </svg>
    );
  }
  // Even slimmer almond petal
  return (
    <svg viewBox="0 0 20 28">
      <path
        d="M 10 2 C 7.5 8, 7 18, 10 26 C 13 18, 12.5 8, 10 2 Z"
        fill="currentColor"
        opacity="0.95"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="0.3"
      />
    </svg>
  );
}

/* ============================================================
   App
   ============================================================ */
function FairyLights() {
  // Round sparkling fairy lights
  const lights = React.useMemo(() => {
    const arr = [];
    const N = 90;
    const tones = ["warm", "warm", "warm", "white", "pink", "warm"];
    for (let i = 0; i < N; i++) {
      arr.push({
        x: Math.round(Math.sin(i * 12.97) * 50 + 50 + (i % 7) * 1.3) % 100,
        y: Math.round(Math.cos(i * 7.31) * 50 + 50 + (i % 5) * 2.1) % 100,
        size: 2 + ((i * 13) % 5),
        delay: ((i * 0.27) % 4).toFixed(2),
        duration: (2.4 + ((i * 0.13) % 2.6)).toFixed(2),
        tone: tones[i % tones.length]
      });
    }
    return arr;
  }, []);
  return (
    <div className="fairy-lights" aria-hidden="true">
      {lights.map((l, i) => (
        <span
          key={i}
          className={`fairy fairy--${l.tone}`}
          style={{
            left: l.x + "vw",
            top: l.y + "vh",
            width: l.size + "px",
            height: l.size + "px",
            animationDelay: l.delay + "s",
            animationDuration: l.duration + "s"
          }}
        />
      ))}
    </div>
  );
}

/* ============================================================
   Google Form submission — pipes RSVP data to your Sheet.
   ============================================================ */
const GOOGLE_FORM = {
  id: "1FAIpQLSfpCSiw5whnomgoG5gTtUlNQ9Qrh-3T1wF_gu0kyoSq_L5TLw",
  entries: {
    name:        "entry.1123697842",
    email:       "entry.1381811538",
    events:      "entry.2143849719",   // checkbox group — append once per selected event
    songRequest: "entry.273136735",
    plusOne:     "entry.1734774685",
    children:    "entry.1260418507",
    veggie:      "entry.535177486",
    allergies:   "entry.2027598016",
    agreed:      "entry.1589682895"
  },
  // Exact label strings for checkbox fields — must match the form options.
  labels: {
    events: {
      mehndi:  "Mehndi + Haldi",
      nikkah:  "Nikkah + Khoba Khobi",
      wedding: "Baraat + Reception"
    },
    veggie: "I require a vegetarian diet",
    agreed: "I have read, understand and agree"
  }
};

async function submitToGoogleForm(payload) {
  const { entries, labels, id } = GOOGLE_FORM;
  const url = `https://docs.google.com/forms/d/e/${id}/formResponse`;

  // Build the list of name/value pairs (events repeat the same key per selection)
  const pairs = [];
  pairs.push([entries.name,  payload.name || ""]);
  pairs.push([entries.email, payload.email || ""]);
  (payload.events || []).forEach((ev) => {
    const label = labels.events[ev.id];
    if (label) pairs.push([entries.events, label]);
  });
  if (payload.songRequest) pairs.push([entries.songRequest, payload.songRequest]);
  if (payload.plusOne)     pairs.push([entries.plusOne, payload.plusOne]);
  if (payload.children)    pairs.push([entries.children, String(payload.children)]);
  if (payload.veggie)      pairs.push([entries.veggie, labels.veggie]);
  if (payload.allergies)   pairs.push([entries.allergies, payload.allergies]);
  if (payload.agreed)      pairs.push([entries.agreed, labels.agreed]);

  // Hidden iframe technique — a real HTML form POSTed at a hidden iframe.
  // Google accepts this just like a regular form submission and the browser
  // doesn't enforce CORS on form posts (only on fetch). Works everywhere.
  const targetName = "gform-rsvp-" + Date.now();
  const iframe = document.createElement("iframe");
  iframe.name = targetName;
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  const form = document.createElement("form");
  form.method = "POST";
  form.action = url;
  form.target = targetName;
  form.acceptCharset = "UTF-8";
  form.enctype = "application/x-www-form-urlencoded";
  form.style.display = "none";

  pairs.forEach(([k, v]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = k;
    input.value = v;
    form.appendChild(input);
  });

  document.body.appendChild(form);

  return new Promise((resolve) => {
    let settled = false;
    const cleanup = () => {
      if (settled) return;
      settled = true;
      try { form.remove(); } catch (_) {}
      try { iframe.remove(); } catch (_) {}
      resolve();
    };
    // Google's response page loads inside the iframe — we know the post went through.
    iframe.addEventListener("load", cleanup);
    // Safety net: clean up even if the iframe never fires `load`
    setTimeout(cleanup, 5000);
    try {
      form.submit();
    } catch (e) {
      // queue locally if the submit itself throws
      try {
        const key = "rsvp_pending";
        const q = JSON.parse(localStorage.getItem(key) || "[]");
        q.push({ payload, t: Date.now() });
        localStorage.setItem(key, JSON.stringify(q));
      } catch (_) {}
      cleanup();
    }
  });
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [openEvent, setOpenEvent] = useState("mehndi");
  const [selectedEvents, setSelectedEvents] = useState({});
  const [confirmation, setConfirmation] = useState(null);

  // Apply accent color to root
  useEffect(() => {
    const accent = tweaks.accent;
    // accept either name key or hex; default to coral
    const found = Object.values(ACCENT_PALETTES).find((p) => p.swatch === accent || p.css === accent);
    const css = found ? found.css : (typeof accent === "string" && accent.startsWith("#")) ? accent : ACCENT_PALETTES.coral.css;
    document.documentElement.style.setProperty("--w-accent", css);
  }, [tweaks.accent]);

  // Effective dark mode — follows the device's prefers-color-scheme by default.
  // (Modern OSes already auto-switch at sunset, so we let the OS decide.)
  // Manual override available via the Tweaks panel.
  const [autoDark, setAutoDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    const mq = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    if (!mq) return;
    const apply = () => setAutoDark(mq.matches);
    apply();
    if (mq.addEventListener) {
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    } else if (mq.addListener) {
      // Older browsers
      mq.addListener(apply);
      return () => mq.removeListener(apply);
    }
  }, []);
  const isDark =
    tweaks.darkMode === "night" ? true :
    tweaks.darkMode === "day"   ? false :
    autoDark;

  // Apply dark theme class
  useEffect(() => {
    document.documentElement.classList.toggle("theme-dark", isDark);
  }, [isDark]);

  const toggleSelected = useCallback((id) => {
    setSelectedEvents((s) => ({ ...s, [id]: !s[id] }));
  }, []);

  // Active-section tracking via IntersectionObserver
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    const ids = ["home", "about", "events", "faq", "rsvp"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
      // Pick the entry closest to top that's intersecting
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Reveal-on-scroll
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  function jumpTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 60;
    window.scrollTo({ top, behavior: "smooth" });
  }

  function handleSubmit(payload) {
    // POST the RSVP to the Google Form. Google Forms doesn't return
    // CORS-friendly responses, so we use no-cors — the request still
    // goes through, but we can't read the response. We treat the post
    // as fire-and-forget; on failure we queue in localStorage so the
    // data isn't lost if the network blips.
    submitToGoogleForm(payload).catch(() => {});
    setConfirmation(payload);
  }

  return (
    <>
      <Nav activeSection={activeSection} onJump={jumpTo} />
      <img
        className="nazar"
        src="assets/nazar.png"
        alt="Watercolor evil-eye nazar amulet for protection"
      />
      {isDark ? <FairyLights /> : <FallingPetals />}
      <Hero onScroll={() => jumpTo("about")} tweaks={tweaks} />
      <Welcome tweaks={tweaks} />
      <Events
        openId={openEvent}
        setOpenId={setOpenEvent}
        selected={selectedEvents}
        toggleSelected={toggleSelected}
      />
      <Faq />
      <Rsvp
        selected={selectedEvents}
        toggleSelected={toggleSelected}
        onSubmit={handleSubmit}
      />
      <Footer />

      <ConfirmationModal
        open={!!confirmation}
        payload={confirmation}
        onClose={() => setConfirmation(null)}
      />

      <Tweaks tweaks={tweaks} setTweak={setTweak} />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
