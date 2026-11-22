/* =========================================================
   Happy Birthday Rutvi 🎂💖  —  script.js

   PART 1 (top)     ✏️ the part YOU edit: names, words, questions,
                       replies, photos, music, email
   PART 2 (bottom)  ⚙️ the engine. You never need to touch it.
   ========================================================= */


/* =========================================================
   PART 1A — SETTINGS
   ========================================================= */
const CONFIG = {

  // 💕 NAMES. In the story write {rutvi}  {love}  {wifey}  {queen}
  // Add "+" to include the emoji too, e.g. {love+} becomes "My Love ❤️"
  names: {
    rutvi: { text: "Rutvi",   emoji: "🎂" },
    love:  { text: "My Love", emoji: "❤️" },
    wifey: { text: "Wifey",   emoji: "🥰" },
    queen: { text: "My Queen", emoji: "👑" }
  },
  signature: "Yours, always ❤️",  

  typingSpeed: 42,                 // milliseconds per letter (lower = faster)
  linePause: 650,                  // pause after each line
  readMsPerChar: 24,               // reading time before a page fades away

  // 🎵 MUSIC: one song, played all the way to the end
  music: {
    file: "music.mp3",             // the song file (same folder as index.html)
    storyVolume: 0.3,              // quiet while she reads (0 to 1)
    filmVolume: 0.95,              // fuller during the memories film
    startVolume: 0.8               // where her volume slider starts
  },

  // 🎞️ THE MEMORY FILM
  photoSeconds: 0,                 // 0 = automatically fits the photos to the song. Or type e.g. 12 for 12 seconds each
  finalReserveSeconds: 55,         // time kept at the end of the song for the final message

  // 📸 PHOTOS, shown in this order. To reorder: cut and paste a whole { ... } line.
  // caption = handwriting on the polaroid,  lines = words typed under the photo
  photos: [
    { src: "photos/photo1.jpg",  caption: "Lazy cafe days ☕",              lines: ["Some of my favourite moments…", "are the quiet ones with you."] },
    { src: "photos/photo2.jpg",  caption: "Cheek to cheek 🖤",              lines: ["One moment…", "One smile…"] },
    { src: "photos/photo3.jpg",  caption: "That little smirk 😏",           lines: ["One memory…", "A thousand feelings…"] },
    { src: "photos/photo4.jpg",  caption: "Lights, music & you 🪔",         lines: ["Even in a crowd…", "my eyes find you first."] },
    { src: "photos/photo5.jpg",  caption: "Rooftop smiles ☀️",             lines: ["Some moments become memories…", "and some people become home."] },
    { src: "photos/photo6.jpg",  caption: "Making you laugh 😂",            lines: ["Your laugh is my favourite sound…", "and my favourite job is causing it."] },
    { src: "photos/photo7.jpg",  caption: "That smile 😊",                  lines: ["The smile I'd recognise anywhere…", "and fall for all over again."] },
    { src: "photos/photo8.jpg",  caption: "Splash and smiles 💦",           lines: ["The happiest moments…", "are the ones next to you."] },
    { src: "photos/photo9.jpg",  caption: "Hold me like this 🤍",           lines: ["In your arms…", "is my favourite place to be."] },
    { src: "photos/photo10.jpg", caption: "Eyes only for you 👀",           lines: ["I could look at you…", "and forget the whole world."] },
    { src: "photos/photo11.jpg", caption: "Your ride for life 🥰",          lines: ["I'd carry you…", "through anything, happily."] },
    { src: "photos/photo12.jpg", caption: "Hand in hand 🤝",                lines: ["Two hands…", "one beautiful forever."] },
    { src: "photos/photo13.jpg", caption: "Home is wherever you are 🏡",    lines: ["Not a place…", "a person."] },
    { src: "photos/photo14.jpg", caption: "Every step, together 🪜",        lines: ["Wherever life leads…", "I'll be holding your hand."] },
    { src: "photos/photo15.jpg", caption: "Us, always ✨",                  lines: ["Some people…", "become part of your story forever."] },
    { src: "photos/photo16.jpg", caption: "My forever 🤍",                  lines: ["Happy Birthday, Rutvi…", "my forever person."] }
  ],

  // 💌 The photo shown on the very last page, above your final message
  finalPhoto: { src: "photos/photo13.jpg", caption: "Happy Birthday, my love 🎂" },

  // 📩 HER ANSWERS → YOUR EMAIL (silent: she never sees this happen)
  // Web3Forms access key (free, from web3forms.com). It is meant to be public. It is NOT a password.
  email: {
    accessKey: "4eff86cb-4095-43fe-9457-3ead9e920993",
    subject: "Rutvi's Birthday Surprise 🎂 — her answers"
  }
};


/* =========================================================
   PART 1B — THE STORY  ✏️
   ---------------------------------------------------------
   Each chapter is a list of "blocks" that appear one after another.

   "Some text"                      → a line that is typed out
   { say: "Text", style: "script" } → a typed line with a style:
                                      script · title · name · big · quote · soft · tiny
                                      (optional: pause: 1500   speed: 150   confetti: true)
   { wait: 1500 }                   → a pause (milliseconds)
   { clear: true }                  → fade the page away and start a fresh one
   { item: { icon, title, lines } } → a little box
   { ask: { ... } }                 → a question (see Chapter 4)
   { button: "Text" }               → a button that turns the page

   In any text you can use {rutvi} {love} {wifey} {queen} and {sig}
   ========================================================= */
const STORY = [

  /* ---------- 1 · THE SURPRISE ---------- */
  {
    label: "A little surprise",
    theme: "blush",
    blocks: [
      { say: "Hey {rutvi}… 🎈", style: "script", pause: 1200 },
      "I have something special for you. 🎁",
      { say: "Before you open it… take a deep breath, and smile. 😊", style: "soft", pause: 900 },
      { button: "Open your surprise 🎁", music: "start" }          // her first tap also starts the music
    ]
  },

  /* ---------- 2 · MISSING YOU + BIRTHDAY WISH ---------- */
  {
    label: "Missing you",
    theme: "blush",
    blocks: [
      "Do you know what I was thinking about today?",
      { say: "Somewhere in between everything, my mind quietly wandered to you. 💭", pause: 1200 },
      { clear: true },
      { say: "I miss you. 🥺", style: "name", pause: 1400 },
      "I miss your smile, your voice, your laugh…",
      "and the way you make ordinary days feel so special.",
      { say: "And I love you, {wifey}. More than I say. More than I show. ❤️", style: "big", pause: 1500 },
      { clear: true },
      { say: "But today isn't about missing…", style: "soft", pause: 1500 },
      "Today, the whole world gets to celebrate the day you were born. 🎉",
      { say: "Happy Birthday, {rutvi}! 🎂", style: "title", confetti: true, pause: 1800 },
      { button: "Let's celebrate 🎈" }
    ]
  },

  /* ---------- 3 · WHAT I LOVE ABOUT YOU ---------- */
  {
    label: "What I love about you",
    theme: "blush",
    blocks: [
      { say: "Let me tell you a few things first… 💝", style: "big", pause: 1000 },
      { item: { icon: "😊", title: "Your smile", lines: [
        "It's the first thing I fall for, again and again."
      ] } },
      { item: { icon: "💗", title: "Your heart", lines: [
        "You care deeply, quietly, and completely."
      ] } },
      { clear: true },
      { item: { icon: "😄", title: "Your laugh", lines: [
        "Hearing it can fix even my worst day."
      ] } },
      { item: { icon: "💪", title: "Your strength", lines: [
        "You handle so much, so beautifully."
      ] } },
      { clear: true },
      { item: { icon: "🏡", title: "Your presence", lines: [
        "With you, everything feels like home."
      ] } },
      { say: "{love+}", style: "name", pause: 1300 },
      { button: "Play a little game with me 💌" }
    ]
  },

  /* ---------- 4 · OUR STORY IN QUESTIONS ----------
     Each question needs:  question, options (icon + label + reply)
     Optional:  tag (small heading) and  write (lets her type her own answer)
     Her answers are emailed to you silently at the end. */
  {
    label: "Our story, in questions",
    theme: "blush",
    blocks: [
      "Now… I want to play a little game with you. 🎮",
      "It's called: our story, in questions.",
      { say: "Answer however your heart says. There are no wrong answers. 💗", style: "soft", pause: 900 },
      { clear: true },

      /* --- Question 1: how we met --- */
      { ask: {
        tag: "Question 1 of 7",
        question: "Do you remember how we first met? 💫",
        options: [
          { icon: "🥰", label: "Every single detail",    reply: "I remember it too… that day quietly changed everything, {rutvi}. ❤️" },
          { icon: "💫", label: "Mostly the feeling",     reply: "Funny… the feeling is exactly what stayed with me too. ✨" },
          { icon: "😏", label: "My version is better",   reply: "Haha! One day we'll compare versions. I already know mine is better. 😜❤️" }
        ],
        write: { label: "Let me tell you the story", placeholder: "Tell me how you remember it… ✍️", reply: "I love hearing it in your words, {rutvi}. 💌" }
      } },
      { clear: 300 },

      /* --- Question 2: first impression --- */
      { ask: {
        tag: "Question 2 of 7",
        question: "What was the first thing you noticed about me? 👀",
        options: [
          { icon: "😊", label: "Your smile",               reply: "Funny… my first thought about you was your smile too. 🥰" },
          { icon: "👀", label: "Your eyes",                reply: "Careful, {rutvi}… I might blush. 👀❤️" },
          { icon: "😂", label: "How silly you were",       reply: "Good to know my goofiness made a first impression! 😂❤️" },
          { icon: "🤍", label: "How comfortable I felt",   reply: "That's the best compliment I could ever ask for. 🤍" }
        ],
        write: { label: "Something else…", placeholder: "Tell me… ✍️", reply: "I'll keep that one close to my heart. 💌" }
      } },
      { clear: 300 },

      /* --- Question 3: who proposed --- */
      { ask: {
        tag: "Question 3 of 7",
        question: "Okay, now the big one… who proposed? 💍",
        options: [
          { icon: "😎", label: "You did",                   reply: "Fine, I'll take the credit. It's the best decision I ever made. 😎❤️" },
          { icon: "😌", label: "I did",                     reply: "Brave girl. And I said yes faster than I've ever said anything. 😌❤️" },
          { icon: "😂", label: "We both did, honestly",     reply: "Two nervous hearts, one beautiful yes. 😂❤️" },
          { icon: "❤️", label: "It just happened",          reply: "Some things don't need a plan… they just find you. ❤️" }
        ]
      } },
      { clear: 300 },

      /* --- Question 4: important decisions --- */
      { ask: {
        tag: "Question 4 of 7",
        question: "What's the most important decision you've made in life, the one you're proud of? 🌟",
        options: [
          { icon: "❤️", label: "Choosing us",               reply: "I'll spend my whole life making sure it was the best decision you ever made. ❤️" },
          { icon: "✨", label: "Following my dreams",       reply: "Then I'll cheer for every dream of yours, loudly, forever. ✨" },
          { icon: "💪", label: "Standing up for myself",    reply: "I admire that strength in you, {rutvi}. I always have. 💪❤️" },
          { icon: "🥰", label: "Trusting my heart",         reply: "Your heart has great taste. (I'm biased, obviously.) 🥰" }
        ],
        write: { label: "Something else…", placeholder: "Tell me about it… ✍️", reply: "Thank you for sharing that with me. I'm so proud of you. 💌" }
      } },
      { clear: 300 },

      /* --- Question 5: favourite memory --- */
      { ask: {
        tag: "Question 5 of 7",
        question: "Which memory of ours would you relive today? 🎞️",
        options: [
          { icon: "💬", label: "Our first conversations",   reply: "Those little talks were the beginning of everything. 💬❤️" },
          { icon: "✈️", label: "A trip we took together",   reply: "Then we'll make so many more of those. Pack your smile. ✈️❤️" },
          { icon: "😂", label: "A silly laughing moment",   reply: "The silly ones are always the ones I treasure most. 😂❤️" },
          { icon: "🎉", label: "A special celebration",     reply: "And today is going to be another one to remember. 🎉" }
        ],
        write: { label: "A different one…", placeholder: "Which memory? ✍️", reply: "I'm smiling just thinking about it. 💌" }
      } },
      { clear: 300 },

      /* --- Question 6: the future --- */
      { ask: {
        tag: "Question 6 of 7",
        question: "Where do you want to see us in the future? 🌅",
        options: [
          { icon: "✈️", label: "Travelling the world",           reply: "Then let's start a list. Every place, every sunset, together. ✈️❤️" },
          { icon: "🏡", label: "In our dream home",              reply: "A home full of laughter, love… and all your favourite things. 🏡" },
          { icon: "🤍", label: "Growing old together",           reply: "Grey hair, same jokes, still holding hands. Deal. 🤍" },
          { icon: "🚀", label: "Chasing big dreams, side by side", reply: "Your dreams and mine, side by side. 🚀❤️" }
        ],
        write: { label: "My own picture of our future", placeholder: "Describe it… ✍️", reply: "I'm saving every word of that picture in my heart. 🌅" }
      } },
      { clear: 300 },

      /* --- Question 7: this year --- */
      { ask: {
        tag: "Question 7 of 7",
        question: "What would you love for us to do together this year? 🌸",
        options: [
          { icon: "✈️", label: "A little trip somewhere",   reply: "Consider it planned. You pick the place, I'll carry the bags. ✈️😄" },
          { icon: "🌙", label: "More date nights",          reply: "Date nights it is. Dress up, I'm taking you out. 🌙❤️" },
          { icon: "🎯", label: "Try something new",         reply: "Something new, together. I'm in. 🎯" },
          { icon: "🤍", label: "Just more time together",   reply: "That's honestly all I want too. 🤍" }
        ],
        write: { label: "I have an idea…", placeholder: "Tell me your idea… ✍️", reply: "Okay, that's now officially on our list. 💌" }
      } }
    ]
  },

  /* ---------- 5 · THE CAKE + WISH ---------- */
  {
    label: "Make a wish",
    theme: "dusk",
    blocks: [
      "And now… the most important part of every birthday. 🎂",
      { say: "Close your eyes. Make a wish. 🤍", style: "script", pause: 1000 },
      { cake: {
        placeholder: "Type your birthday wish here… ✍️ (or just keep it in your heart)",
        button: "Blow the candles 🕯️",
        reply: "May every single wish come true, {rutvi}. And I'll spend my life helping them happen. 🎉💖"
      } },
      { send: true }                    // ← her answers are emailed to you here, silently
    ]
  },

  /* ---------- 6 · THE BIRTHDAY LETTER ---------- */
  {
    label: "A letter for you",
    theme: "peach",
    paper: true,
    blocks: [
      { musicLevel: 0.22, ms: 4000 },   // the song becomes very soft
      { say: "My dearest {rutvi},", style: "name", pause: 900 },
      "Happy Birthday, my love. 🎂",
      "Another year of you, and I'm still amazed by the person you are.",
      "You make my life softer, funnier and so much brighter. Even on my most ordinary days, thinking of you makes them better. 🥺",
      "Thank you for loving me on my good days and on my not-so-good ones. Thank you for your patience, your heart, and for simply being you.",
      { clear: 2500 },
      "I miss you in a thousand small ways. Your voice. Your laugh. The way home feels when you're in it.",
      "I don't say it as often as I should, so let me say it now…",
      { say: "I love you. Truly, deeply, endlessly. ❤️", style: "big", pause: 1200 },
      "May this year bring you every smile, every success, and every little wish your heart has been quietly keeping.",
      { say: "{sig}", style: "name", pause: 900 },
      { button: "There's one more thing… 🎞️" }
    ]
  },

  /* ---------- 7 · THE MEMORY FILM + FINAL PAGE ---------- */
  {
    label: "",
    theme: "black",
    bare: true,
    blocks: [
      { wait: 1500 },
      { say: "Before I let you go…", style: "big", pause: 1800 },
      { say: "I made you a little film.", pause: 1800 },
      { say: "Our memories. 🎞️", style: "script", pause: 1800 },
      { film: true },                   // the song restarts from the beginning and plays to the end
      { clear: 300 },
      { slideshow: true },              // ← your photos, one by one
      { clear: 1 },

      // ---- the last page ----
      { theme: "blush" },
      { cardStyle: "plain" },
      { confetti: true },
      { photo: true },
      { wait: 1500 },
      { say: "Happy Birthday, {rutvi}. 🎂", style: "title", confetti: true, pause: 2200 },
      "Thank you for being my person.",
      "Thank you for every memory… and for every one we're yet to make.",
      { say: "May this year give you everything your heart quietly wishes for. 🌸", style: "quote", pause: 1800 },
      "And I promise…",
      { say: "I'll be right beside you for all of it. 🤍", style: "big", pause: 2000 },
      { clear: 600 },
      { say: "I love you. Today, tomorrow, and always. ❤️", style: "script", confetti: true, pause: 2000 },
      { say: "{sig}", style: "name", pause: 600 },
      { say: "Made with love 💌", style: "tiny", pause: 500 },
      { end: true }
    ]
  }
];



/* =========================================================
   PART 2 — THE ENGINE ⚙️  (no need to edit below this line)
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const FAST = /[?&]fast\b/.test(location.search);        // only used for quick testing
const sleep = (ms) => new Promise((r) => setTimeout(r, FAST ? ms * 0.02 : ms));
const rand = (a, b) => Math.random() * (b - a) + a;
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const h = (tag, cls = '') => { const e = document.createElement(tag); e.className = cls; return e; };

// Replace {rutvi}, {love+}, {sig} ... with the names from CONFIG
function fill(text) {
  return String(text).replace(/\{(\w+)(\+)?\}/g, (m, key, plus) => {
    if (key === 'sig') return CONFIG.signature;
    const n = CONFIG.names[key];
    if (!n) return m;
    return plus ? `${n.text} ${n.emoji}` : n.text;
  });
}

let card, page, label, slot, cinema;
let runToken = 0, typing = false, skip = false;

/* ---------------------------------------------------------
   Typewriter (tap anywhere to speed a line up)
   --------------------------------------------------------- */
const segmenter = (window.Intl && Intl.Segmenter) ? new Intl.Segmenter(undefined, { granularity: 'grapheme' }) : null;
const glyphs = (s) => segmenter ? Array.from(segmenter.segment(s), (x) => x.segment) : Array.from(s);
const PAUSES = { '.': 240, '…': 300, ',': 140, '?': 240, '!': 200 };

async function typeInto(el, text, speed = CONFIG.typingSpeed) {
  const g = glyphs(text);
  const done = h('span', 't-done'), rest = h('span', 't-rest');
  rest.textContent = text;
  el.textContent = '';
  el.append(done, rest);
  el.classList.add('typing');
  typing = true; skip = false;
  let shown = '';
  for (let i = 0; i < g.length; i++) {
    if (skip) break;
    shown += g[i];
    done.textContent = shown;
    rest.textContent = g.slice(i + 1).join('');
    if (i % 10 === 0) follow();
    await sleep(speed + (PAUSES[g[i]] || 0) * (speed / CONFIG.typingSpeed));
  }
  el.textContent = text;
  el.classList.remove('typing');
  typing = false; skip = false;
  follow();
}

// Keep the newest line in view if the card needs to scroll
function follow() {
  if (card && card.scrollHeight > card.clientHeight && card.scrollTo) card.scrollTo({ top: card.scrollHeight, behavior: 'smooth' });
}

/* ---------------------------------------------------------
   Birthday atmosphere: balloons, soft confetti, glowing lights
   --------------------------------------------------------- */
const CONF_COLORS = ['#ff8fb3', '#f6d28b', '#cdb9f2', '#ffc7a6', '#b9e5d3', '#e8467c', '#ffffff'];

function buildSky() {
  const small = window.innerWidth < 600;
  const bokeh = $('#bokeh');
  for (let i = 0; i < 9; i++) {
    const b = h('i', 'bk');
    b.style.setProperty('--x', rand(-5, 95) + '%');
    b.style.setProperty('--y', rand(0, 90) + '%');
    b.style.setProperty('--s', rand(70, 200) + 'px');
    b.style.setProperty('--c', pick(['rgba(255,170,200,.7)', 'rgba(255,214,140,.65)', 'rgba(205,185,242,.6)', 'rgba(255,255,255,.8)']));
    b.style.setProperty('--d', rand(8, 16) + 's');
    b.style.setProperty('--dl', -rand(0, 10) + 's');
    bokeh.append(b);
  }
  const box = $('#drift');
  for (let i = 0; i < (small ? 6 : 10); i++) {
    const b = h('span', 'balloon');
    b.style.setProperty('--x', rand(2, 92) + '%');
    b.style.setProperty('--w', rand(34, 56) + 'px');
    b.style.setProperty('--c', pick(['#ff9fbd', '#ffd27d', '#c7b2ff', '#ffb48a', '#9fe0c8', '#ff7fa8']));
    b.style.setProperty('--d', rand(22, 38) + 's');
    b.style.setProperty('--dl', -rand(0, 38) + 's');
    b.style.setProperty('--sway', rand(-40, 40) + 'px');
    box.append(b);
  }
  for (let i = 0; i < (small ? 14 : 24); i++) {
    const c = h('i', 'conf soft');
    c.style.setProperty('--x', rand(0, 100) + '%');
    c.style.setProperty('--w', rand(5, 9) + 'px');
    c.style.setProperty('--c', pick(CONF_COLORS));
    c.style.setProperty('--d', rand(14, 26) + 's');
    c.style.setProperty('--dl', -rand(0, 26) + 's');
    c.style.setProperty('--sway', rand(-60, 60) + 'px');
    c.style.setProperty('--rot', rand(-540, 540) + 'deg');
    box.append(c);
  }
}

// A burst of confetti falling from the top
function confetti(n = 70) {
  const box = $('#drift');
  for (let i = 0; i < n; i++) {
    const c = h('i', 'conf');
    c.style.setProperty('--x', rand(0, 100) + '%');
    c.style.setProperty('--w', rand(6, 11) + 'px');
    c.style.setProperty('--c', pick(CONF_COLORS));
    c.style.setProperty('--d', rand(3.5, 6.5) + 's');
    c.style.setProperty('--dl', rand(0, 1.2) + 's');
    c.style.setProperty('--sway', rand(-90, 90) + 'px');
    c.style.setProperty('--rot', rand(-720, 720) + 'deg');
    box.append(c);
    setTimeout(() => c.remove(), 9000);
  }
}

function sparkle(x, y, list = ['💖', '✨', '🎉', '🌸'], n = 6, spread = 60) {
  for (let i = 0; i < n; i++) {
    const p = h('span', 'pop');
    p.textContent = pick(list);
    p.style.left = x + 'px';
    p.style.top = y + 'px';
    p.style.setProperty('--dx', rand(-spread, spread) + 'px');
    p.style.setProperty('--dy', -spread * rand(0.8, 1.7) + 'px');
    document.body.append(p);
    setTimeout(() => p.remove(), 1400);
  }
}

/* =========================================================
   MUSIC 🎵  one song · smooth fades · mute · volume
   ========================================================= */
const AC = window.AudioContext || window.webkitAudioContext;
// iPhones ignore audio.volume, so there we route the song through Web Audio instead
const VOLUME_WORKS = (() => { try { const a = new Audio(); a.volume = 0.5; return a.volume === 0.5; } catch (e) { return true; } })();
const USE_WEBAUDIO = !VOLUME_WORKS && !!AC && location.protocol !== 'file:';

let audio = null, actx = null, gainNode = null;
let level = 0, muted = false, master = CONFIG.music.startVolume;
let fadeTimer = null, musicOn = false, songEnded = false, endFading = false, filmStartedAt = 0, onSongEnd = null;

const outVolume = () => (muted ? 0 : clamp(level * master, 0, 1));
function applyVolume() {
  if (!audio) return;
  const v = outVolume();
  if (gainNode) gainNode.gain.value = v;
  else if (VOLUME_WORKS) audio.volume = v;
  audio.muted = muted || (!gainNode && !VOLUME_WORKS && level < 0.05);
}
function fade(to, ms) {
  clearInterval(fadeTimer);
  const from = level, t0 = Date.now();
  return new Promise((resolve) => {
    fadeTimer = setInterval(() => {
      const p = clamp((Date.now() - t0) / ms, 0, 1);
      const e = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;   // gentle ease in/out
      level = from + (to - from) * e;
      applyVolume();
      if (p >= 1) { clearInterval(fadeTimer); resolve(); }
    }, 50);
  });
}

function initAudio() {
  if (audio) return;
  audio = new Audio(CONFIG.music.file);
  audio.preload = 'auto';
  audio.loop = true;                                   // loops while she reads; the film plays it once
  audio.addEventListener('ended', () => { songEnded = true; if (onSongEnd) onSongEnd(); });
  audio.addEventListener('timeupdate', () => {          // soft fade-out over the last seconds of the song
    if (!audio.loop && !endFading && isFinite(audio.duration) && audio.duration - audio.currentTime < 4) { endFading = true; fade(0, 3600); }
  });
  if (USE_WEBAUDIO) {
    actx = new AC();
    gainNode = actx.createGain();
    gainNode.gain.value = 0;
    actx.createMediaElementSource(audio).connect(gainNode);
    gainNode.connect(actx.destination);
  }
  applyVolume();
}

async function startMusic() {                           // must be called from her tap
  if (musicOn) return;
  musicOn = true;
  initAudio();
  level = 0; applyVolume();
  try {
    if (actx && actx.state === 'suspended') await actx.resume();
    await audio.play();
    fade(CONFIG.music.storyVolume, 5000);
  } catch (e) { console.warn('Music could not start:', e); }
}

async function filmMusic() {                            // restart the song and let it play to the very end
  initAudio();
  await fade(0, 2500);
  try {
    if (actx && actx.state === 'suspended') await actx.resume();
    audio.loop = false;
    audio.currentTime = 0;
    songEnded = false; endFading = false;
    filmStartedAt = Date.now();
    await audio.play();
    musicOn = true;
    fade(CONFIG.music.filmVolume, 6000);
  } catch (e) {
    if (e && e.name === 'NotAllowedError') showTapSong();
    else console.warn('Song could not play:', e);
  }
}

function showTapSong() {
  const b = $('#tapSong');
  b.hidden = false;
  b.onclick = async () => {
    b.hidden = true;
    try { audio.loop = false; audio.currentTime = 0; filmStartedAt = Date.now(); await audio.play(); musicOn = true; fade(CONFIG.music.filmVolume, 4000); } catch (e) {}
  };
}

$('#muteBtn').addEventListener('click', () => {
  muted = !muted;
  $('#muteBtn').textContent = muted ? '🔇' : '🔊';
  applyVolume();
});
$('#volume').value = Math.round(master * 100);
$('#volume').addEventListener('input', (e) => {
  master = e.target.value / 100;
  if (muted && master > 0) { muted = false; $('#muteBtn').textContent = '🔊'; }
  applyVolume();
});

// Pause the song if she switches apps, continue when she comes back
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    if (audio && musicOn && !songEnded) audio.pause();
    sendAnswers(true);                                  // if she leaves early, send what she answered so far
  } else if (audio && musicOn && !songEnded) {
    audio.play().catch(() => {});
  }
});
window.addEventListener('pagehide', () => sendAnswers(true));

/* =========================================================
   HER ANSWERS → YOUR EMAIL (silent)
   ========================================================= */
const ANSWERS = [];
let sentCount = 0, finalSent = false, sending = false;

function buildReport(partial) {
  const lines = [`🎂 Rutvi opened her birthday surprise!`];
  if (partial) lines.push('(She left before the end, so these are the answers up to that point.)');
  lines.push('');
  ANSWERS.forEach((x, i) => {
    lines.push(`${i + 1}. ${x.q}`);
    lines.push(`   → ${x.a}${x.written ? '   (typed by her ✍️)' : ''}`);
    lines.push('');
  });
  lines.push('Opened on: ' + new Date().toLocaleString());
  return lines.join('\n');
}

async function sendAnswers(partial = false) {
  if (!ANSWERS.length || ANSWERS.length === sentCount || finalSent) return;
  if (partial && sending) return;
  const key = CONFIG.email.accessKey;
  if (!key || /PASTE/i.test(key)) { console.log(buildReport(partial)); return; }   // no key yet: just show it in the console
  const count = ANSWERS.length;
  sending = true;
  for (let attempt = 0; attempt < (partial ? 1 : 3); attempt++) {
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        keepalive: true,
        body: JSON.stringify({
          access_key: key,
          subject: CONFIG.email.subject + (partial ? ' (partial)' : ''),
          from_name: 'Birthday Website 🎂',
          message: buildReport(partial)
        })
      });
      const data = await res.json().catch(() => ({ success: res.ok }));
      if (data.success) { sentCount = count; if (!partial) finalSent = true; break; }
    } catch (e) { console.warn('Could not send answers:', e); }
    await new Promise((r) => setTimeout(r, 3000));
  }
  sending = false;
}

/* ---------------------------------------------------------
   Blocks
   --------------------------------------------------------- */
async function say(b, parent = page) {
  const p = h('p', 'line rise ' + (b.style || ''));
  parent.append(p);
  follow();
  if (b.confetti) confetti();
  await typeInto(p, fill(b.say), b.speed);
  await sleep(b.pause ?? CONFIG.linePause);
}

async function item(it) {
  const box = h('div', 'item rise');
  const t = h('div', 'item-title');
  t.textContent = `${it.icon} ${fill(it.title)}`;
  box.append(t);
  page.append(box);
  follow();
  await sleep(500);
  for (const l of it.lines) await say(typeof l === 'string' ? { say: l } : l, box);
}

async function clearPage(ms) {
  const wait = ms === true ? clamp(page.textContent.length * CONFIG.readMsPerChar, 1600, 7000) : ms;
  await sleep(wait);
  page.classList.add('fade');
  await sleep(800);
  page.innerHTML = '';
  page.classList.remove('fade');
  if (card) card.scrollTop = 0;
}

function button(b) {
  return new Promise((resolve) => {
    const btn = h('button', 'btn rise');
    btn.textContent = fill(b.button);
    page.append(btn);
    follow();
    btn.addEventListener('click', () => {
      btn.disabled = true;
      if (b.music === 'start') startMusic();            // happens inside her tap, so the browser allows it
      setTimeout(resolve, 350);
    });
  });
}

// A question with warm answers (+ an optional "write your own")
async function ask(a) {
  const box = h('div', 'ask');
  page.append(box);
  if (a.tag) { const t = h('p', 'tag rise'); t.textContent = fill(a.tag); box.append(t); }
  const q = h('p', 'line big rise');
  box.append(q);
  await typeInto(q, fill(a.question));
  await sleep(500);

  const list = h('div', 'options');
  box.append(list);
  const rows = a.options.map((o) => ({ ...o, kind: 'preset' }));
  if (a.write) rows.push({ icon: '✍️', label: a.write.label, kind: 'write' });
  const buttons = rows.map((o, i) => {
    const b = h('button', 'option rise');
    b.style.animationDelay = (i * 0.12) + 's';
    const ico = h('span', 'ico'); ico.textContent = o.icon;
    const lbl = h('span', 'lbl'); lbl.textContent = fill(o.label);
    b.append(ico, lbl);
    list.append(b);
    return [b, o];
  });
  follow();

  let writeBox = null;
  const picked = await new Promise((resolve) => {
    buttons.forEach(([b, o]) => b.addEventListener('click', () => {
      if (list.classList.contains('locked')) return;
      buttons.forEach(([x]) => x.classList.remove('selected'));
      b.classList.add('selected');
      if (o.kind === 'write') {
        if (!writeBox) { writeBox = buildWriteBox(a.write, (text) => resolve({ kind: 'write', text })); box.append(writeBox); }
        writeBox.classList.add('open');
        follow();
        const ta = $('textarea', writeBox);
        if (ta) ta.focus({ preventScroll: true });
      } else {
        if (writeBox) writeBox.classList.remove('open');
        resolve({ kind: 'preset', reply: o.reply, text: `${o.icon} ${o.label}` });
      }
    }));
  });

  ANSWERS.push({ q: fill(a.question), a: picked.text.trim(), written: picked.kind === 'write' });
  list.classList.add('locked');
  if (writeBox) writeBox.classList.remove('open');
  if (picked.kind === 'write') {
    const echo = h('p', 'echo rise');
    echo.textContent = '“' + picked.text.trim() + '”';
    box.append(echo);
    follow();
    await sleep(800);
  }
  const replyText = fill(picked.kind === 'write' ? a.write.reply : picked.reply);
  const reply = h('p', 'reply rise');
  box.append(reply);
  follow();
  await typeInto(reply, replyText);
  await sleep(clamp(replyText.length * 45, 2800, 6000));
}

function buildWriteBox(w, onSend) {
  const box = h('div', 'write');
  const ta = h('textarea');
  ta.rows = 4; ta.maxLength = 500; ta.placeholder = fill(w.placeholder || 'Type here…');
  const dots = h('div', 'dots'); dots.innerHTML = '<span></span><span></span><span></span>';
  const send = h('button', 'btn small'); send.textContent = 'Send 💌';
  box.append(ta, dots, send);
  let idle, keys = 0;
  ta.addEventListener('input', () => {
    dots.classList.add('on'); ta.classList.add('glow');
    clearTimeout(idle);
    idle = setTimeout(() => { dots.classList.remove('on'); ta.classList.remove('glow'); }, 900);
    if (++keys % 4 === 0) { const r = ta.getBoundingClientRect(); sparkle(r.left + rand(20, r.width - 20), r.top + 8, ['💗', '✨', '🎈'], 1, 50); }
  });
  send.addEventListener('click', () => {
    if (!ta.value.trim()) { ta.classList.remove('shake'); void ta.offsetWidth; ta.classList.add('shake'); return; }
    onSend(ta.value);
  });
  return box;
}

/* ---------- The cake ---------- */
const CAKE_SVG = `<svg class="cake" viewBox="0 0 240 230" role="img" aria-label="A birthday cake with candles">
  <ellipse cx="120" cy="214" rx="108" ry="11" fill="rgba(0,0,0,.2)"/>
  <ellipse cx="120" cy="200" rx="104" ry="14" fill="#fbe3ea"/>
  <rect x="34" y="138" width="172" height="62" rx="14" fill="#ffb3ca"/>
  <rect x="34" y="138" width="172" height="16" rx="8" fill="#fff"/>
  <g fill="#fff"><circle cx="52" cy="154" r="8"/><circle cx="84" cy="156" r="9"/><circle cx="118" cy="154" r="8"/><circle cx="152" cy="157" r="9"/><circle cx="186" cy="154" r="8"/></g>
  <g fill="#f0c36a"><circle cx="58" cy="182" r="4"/><circle cx="90" cy="186" r="4"/><circle cx="122" cy="182" r="4"/><circle cx="154" cy="186" r="4"/><circle cx="184" cy="182" r="4"/></g>
  <rect x="62" y="94" width="116" height="46" rx="12" fill="#ffd0e0"/>
  <rect x="62" y="94" width="116" height="14" rx="7" fill="#fff"/>
  <g fill="#fff"><circle cx="80" cy="109" r="7"/><circle cx="106" cy="111" r="8"/><circle cx="134" cy="109" r="7"/><circle cx="160" cy="111" r="8"/></g>
  <text x="120" y="132" text-anchor="middle" font-size="16">💖</text>
  <g>
    <rect x="86" y="62" width="8" height="34" rx="3" fill="#ffe7a8"/><rect x="116" y="62" width="8" height="34" rx="3" fill="#cfe9ff"/><rect x="146" y="62" width="8" height="34" rx="3" fill="#ffd0e8"/>
    <g class="flame"><ellipse cx="90"  cy="52" rx="5" ry="9" fill="#ffb347"/><ellipse cx="90"  cy="54" rx="2.6" ry="5" fill="#fff3b0"/></g>
    <g class="flame"><ellipse cx="120" cy="52" rx="5" ry="9" fill="#ffb347"/><ellipse cx="120" cy="54" rx="2.6" ry="5" fill="#fff3b0"/></g>
    <g class="flame"><ellipse cx="150" cy="52" rx="5" ry="9" fill="#ffb347"/><ellipse cx="150" cy="54" rx="2.6" ry="5" fill="#fff3b0"/></g>
  </g>
</svg>`;

async function cake(c) {
  const box = h('div', 'cake-box rise');
  box.innerHTML = CAKE_SVG;
  const ta = h('textarea');
  ta.rows = 3; ta.maxLength = 400; ta.placeholder = fill(c.placeholder);
  const btn = h('button', 'btn');
  btn.textContent = fill(c.button);
  box.append(ta, btn);
  page.append(box);
  follow();
  await new Promise((resolve) => btn.addEventListener('click', resolve));
  btn.disabled = true; ta.disabled = true;
  $('.cake', box).classList.add('blown');
  confetti(110);
  if (ta.value.trim()) ANSWERS.push({ q: '🎂 Her birthday wish', a: ta.value.trim(), written: true });
  await sleep(900);
  const reply = h('p', 'reply rise');
  box.append(reply);
  follow();
  await typeInto(reply, fill(c.reply));
  await sleep(4500);
}

/* ---------- Photos ---------- */
const canLoad = (src) => new Promise((res) => { const i = new Image(); i.onload = () => res(true); i.onerror = () => res(false); i.src = src; });

// The photo above your final message
async function showFinalPhoto() {
  const p = CONFIG.finalPhoto;
  if (!p || !(await canLoad(p.src))) return;
  const fig = h('figure', 'polaroid');
  fig.style.setProperty('--tilt', '-2deg');
  const pic = h('div', 'pic');
  const img = h('img'); img.src = p.src; img.alt = p.caption || 'Us';
  pic.append(img);
  const cap = h('figcaption', 'cap'); cap.textContent = fill(p.caption || '');
  fig.append(pic, cap);
  slot.innerHTML = '';
  slot.append(fig);
  slot.classList.add('on');
}
function hidePhoto() { slot.classList.remove('on'); slot.innerHTML = ''; }

// How long each photo stays (auto-fits the song so the film and the music end together)
function photoMs(n) {
  if (CONFIG.photoSeconds > 0) return CONFIG.photoSeconds * 1000;
  const total = audio && isFinite(audio.duration) ? audio.duration * 1000 : 0;
  if (!total) return 12000;
  const left = total - (Date.now() - filmStartedAt) - CONFIG.finalReserveSeconds * 1000;
  return clamp(left / n, 8000, 20000);
}

// The film: slow zoom, soft fades, floating polaroids, warm light
async function slideshow() {
  const ok = [];
  for (const p of CONFIG.photos) if (await canLoad(p.src)) ok.push(p);
  if (!ok.length) return;
  cinema.classList.add('on');
  await sleep(2400);
  const dur = photoMs(ok.length);
  let prev = null;
  for (let n = 0; n < ok.length; n++) {
    const p = ok[n], t0 = Date.now();
    const f = h('div', 'frame');
    f.style.setProperty('--dur', (dur + 4000) + 'ms');
    f.innerHTML = '<div class="bg"></div><div class="light"></div><figure class="polaroid"><div class="pic"><img alt=""></div><figcaption class="cap"></figcaption></figure><div class="sub"></div>';
    $('.bg', f).style.backgroundImage = `url("${p.src}")`;
    const img = $('img', f); img.src = p.src; img.alt = p.caption || 'A memory of us';
    $('.cap', f).textContent = fill(p.caption || '');
    $('.polaroid', f).style.setProperty('--tilt', (n % 2 ? 2 : -2) + 'deg');
    cinema.append(f);
    await sleep(80);
    f.classList.add('show');
    if (prev) { const old = prev; old.classList.remove('show'); setTimeout(() => old.remove(), 2800); }
    prev = f;
    await sleep(2600);
    for (const line of (p.lines || [])) {
      const el = h('p', 'sub-line rise');
      $('.sub', f).append(el);
      await typeInto(el, fill(line), 52);
      await sleep(1400);
    }
    await sleep(Math.max(0, dur - (Date.now() - t0)));
  }
  prev.classList.remove('show');
  cinema.classList.remove('on');
  await sleep(2800);
  cinema.innerHTML = '';
}

// The very end: "read again" appears once the song has finished
function finish() {
  const again = h('button', 'btn ghost rise');
  again.textContent = 'Watch it again 🎞️';
  again.addEventListener('click', () => location.reload());
  const show = () => { page.append(again); follow(); };
  if (audio && musicOn && !songEnded && !audio.paused) onSongEnd = show;
  else show();
}

async function runBlock(b) {
  if (typeof b === 'string') b = { say: b };
  if (b.say !== undefined)   return say(b);
  if (b.wait)                return sleep(b.wait);
  if (b.clear)               return clearPage(b.clear);
  if (b.item)                return item(b.item);
  if (b.ask)                 return ask(b.ask);
  if (b.cake)                return cake(b.cake);
  if (b.button)              { await button(b); return 'next'; }
  if (b.theme)               { document.body.dataset.theme = b.theme; return; }
  if (b.cardStyle)           { card.classList.remove('bare', 'paper'); return; }
  if (b.confetti)            return confetti(120);
  if (b.send)                { sendAnswers(false); return; }
  if (b.film)                return filmMusic();
  if (b.slideshow)           return slideshow();
  if (b.photo)               return showFinalPhoto();
  if (b.end)                 return finish();
  if ('musicLevel' in b)     { if (audio && musicOn) fade(b.musicLevel, b.ms || 3000); return; }
}

/* ---------------------------------------------------------
   Chapters + page turns
   --------------------------------------------------------- */
async function playChapter(i) {
  const ch = STORY[i];
  const token = ++runToken;
  document.body.dataset.theme = ch.theme || 'blush';
  card.className = 'card enter' + (ch.paper ? ' paper' : '') + (ch.bare ? ' bare' : '');
  card.innerHTML = '';
  card.scrollTop = 0;
  page = h('div', 'page');
  card.append(page);
  label.textContent = ch.label || '';
  label.classList.toggle('show', !!ch.label);

  for (const b of ch.blocks) {
    if (token !== runToken) return;
    if (await runBlock(b) === 'next') { goTo(i + 1); return; }
  }
  if (i + 1 < STORY.length) { await sleep(1200); goTo(i + 1); }
}

async function goTo(i) {
  if (i >= STORY.length) return;
  card.classList.add('out');
  label.classList.remove('show');
  await sleep(750);
  hidePhoto();
  playChapter(i);
}

/* ---------------------------------------------------------
   Taps
   --------------------------------------------------------- */
document.addEventListener('click', () => { if (typing) skip = true; }, true);
document.addEventListener('click', (e) => {
  const b = e.target.closest('.btn, .option');
  if (!b) return;
  b.classList.remove('pressed'); void b.offsetWidth; b.classList.add('pressed');
  sparkle(e.clientX, e.clientY, ['💖', '✨', '🎉', '🌸'], 6, 60);
});

/* ---------------------------------------------------------
   Start
   --------------------------------------------------------- */
function init() {
  card = $('#card'); label = $('#chapterLabel'); slot = $('#photoSlot'); cinema = $('#cinema');
  document.title = fill('Happy Birthday {rutvi} 🎂💖');
  buildSky();
  // Handy while editing: open index.html#5 to jump straight to chapter 5
  const jump = parseInt(location.hash.slice(1), 10);
  goTo(jump >= 1 && jump <= STORY.length ? jump - 1 : 0);
}
init();
