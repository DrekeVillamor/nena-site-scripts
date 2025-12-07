// globalInit.js
window.NENA = window.NENA || {};
window.NENA.els = {};

window.NENA.initGlobal = function () {
  console.log("🌍 NENA.initGlobal");

  const q = (sel) => document.querySelector(sel);

  // Hero elementen
  window.NENA.els.heroFirst = q(".hero-name-first");
  window.NENA.els.heroLast  = q(".hero-name-last");
  window.NENA.els.heroQuote = q(".hero-quote-wrapper");

  // TikTok video elementen
  const video1 = q(".tiktok-card-1 .w-video");
  const video2 = q(".tiktok-card-2 .w-video");
  const video3 = q(".tiktok-card-3 .w-video");
  const video4 = q(".tiktok-card-4 .w-video");
  const video5 = q(".tiktok-card-5 .w-video");

  window.NENA.els.tiktokCardsInitial = [video1, video2].filter(Boolean);
  window.NENA.els.tiktokCardsLazy    = [video3, video4, video5].filter(Boolean);
  window.NENA.els.tiktokCards        = [
    ...window.NENA.els.tiktokCardsInitial,
    ...window.NENA.els.tiktokCardsLazy
  ];

  // GTA overlay elementen
  window.NENA.els.wordOverlay = q(".word-overlay");
  window.NENA.els.wordText    = q(".word-text");

  // -----------------------------
  // INITIAL STATES (ANTI-FLASH)
  // -----------------------------

  // Hero naam + quote start verborgen
  gsap.set(
    [window.NENA.els.heroFirst, window.NENA.els.heroLast, window.NENA.els.heroQuote],
    { visibility: "visible", opacity: 0 }
  );

  // TikTok kaarten start onzichtbaar + iets naar beneden + geschaald
  gsap.set(window.NENA.els.tiktokCards, {
    visibility: "visible",
    opacity: 0,
    scale: 0.8,
    y: 50
  });

  // GTA overlay: onzichtbaar
  if (window.NENA.els.wordOverlay) {
    gsap.set(window.NENA.els.wordOverlay, { opacity: 0 });
  }

  // GTA tekst: SUPER groot + transparant
  if (window.NENA.els.wordText) {
    gsap.set(window.NENA.els.wordText, {
      scale: 4,
      opacity: 0,
      color: "rgba(255,255,255,0)",
      transformOrigin: "center center"
    });
  }

  console.log("✅ Global init states gezet");
};
