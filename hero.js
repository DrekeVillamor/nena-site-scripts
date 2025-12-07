// hero.js
window.NENA = window.NENA || {};

window.NENA.addHeroToTimeline = function (tl) {
  const { nenaChars, schuurChars } = window.NENA.els || {};

  if (!tl || !nenaChars || !schuurChars) {
    console.warn("⚠️ Hero animatie: ontbrekende timeline of elementen");
    return;
  }

  tl.add("heroStart");

  // Loader-text + indicator verdwijnen bij start scroll
  tl.to(
    ".loader-text",
    {
      opacity: 0,
      y: -40,
      duration: 1,
      ease: "power2.inOut"
    },
    "heroStart"
  );

  tl.to(
    ".scroll-indicator",
    {
      opacity: 0,
      y: 30,
      duration: 0.8,
      ease: "power2.out"
    },
    "heroStart"
  );

  // Hero naam
  tl.to(
    nenaChars,
    {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.08,
      ease: "power2.out"
    },
    "heroStart+=0.5"
  );

  tl.to(
    schuurChars,
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.06,
      ease: "power2.out"
    },
    "-=0.3"
  );

  // Quote
  tl.to(
    ".hero-quote-wrapper",
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.out"
    },
    "-=0.2"
  );
};
