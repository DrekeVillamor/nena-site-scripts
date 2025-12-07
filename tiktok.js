// tiktok.js
window.NENA = window.NENA || {};

window.NENA.addTikTokToTimeline = function (tl) {
  const {
    tiktokCardsInitial,
    tiktokCardsLazy
  } = window.NENA.els || {};

  if (!tl || !tiktokCardsInitial || !tiktokCardsLazy) {
    console.warn("⚠️ TikTok animatie: ontbrekende timeline of elementen");
    return;
  }

  tl.add("tiktokStart");

  // TikTok cards 1+2
  tl.to(
    tiktokCardsInitial,
    {
      opacity: 1,
      x: 0,
      y: -100,
      rotation: 0,
      scale: 0.8,
      duration: 1.2,
      stagger: 0.3,
      ease: "back.out(1.7)"
    },
    "tiktokStart"
  );

  // Lazy cards zichtbaar maken
  tl.call(() => {
    gsap.set(tiktokCardsLazy, { display: "block", visibility: "visible" });
  });

  // Kleine pauze in de scroll
  tl.to({}, { duration: 0.3 });

  // TikTok cards 3+4+5
  tl.to(
    tiktokCardsLazy,
    {
      opacity: 1,
      x: 0,
      y: -100,
      rotation: 0,
      scale: 0.8,
      duration: 1.2,
      stagger: 0.3,
      ease: "back.out(1.7)"
    }
  );
};
