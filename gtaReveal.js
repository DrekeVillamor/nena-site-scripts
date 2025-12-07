// gtaReveal.js
window.NENA = window.NENA || {};

window.NENA.addGtaRevealToTimeline = function (tl) {
  const {
    wordOverlay,
    wordText
  } = window.NENA.els || {};

  if (!tl || !wordOverlay || !wordText) {
    console.warn("⚠️ GTA reveal: ontbrekende timeline of elementen");
    return;
  }

  tl.to({}, { duration: 0.4 }); // kleine extra scrollruimte

  tl.add("wordReveal");

  // Hero + TikTok wat dimmen (optioneel)
  tl.to(
    [".hero-name-wrapper", ".hero-quote-wrapper", ".tiktok-wrapper-left"],
    {
      opacity: 0.5,
      duration: 1.2,
      ease: "power2.out"
    },
    "wordReveal"
  );

  // Zwarte overlay fade-in
  tl.to(
    wordOverlay,
    {
      opacity: 1,
      duration: 0.8,
      ease: "power2.out"
    },
    "wordReveal"
  );

  // Tekst: mega + transparant → normaal + wit
  tl.to(
    wordText,
    {
      scale: 1,
      opacity: 1,
      color: "#ffffff",
      duration: 1.8,
      ease: "power2.out"
    },
    "wordReveal"
  );
};
