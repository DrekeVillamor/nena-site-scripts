// main.js
window.NENA = window.NENA || {};

(function () {

  function waitForFontsAndDom() {
    return Promise.all([
      document.fonts.ready,
      new Promise(resolve => {
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", resolve);
        } else {
          resolve();
        }
      })
    ]);
  }

  waitForFontsAndDom().then(() => {
    console.log("✅ Fonts + DOM ready");

    if (typeof gsap === "undefined") {
      console.error("❌ GSAP niet geladen!");
      return;
    }

    gsap.registerPlugin(ScrollTrigger, SplitText);

    // 1) Global init: elementen + initial states
    if (typeof window.NENA.initGlobal === "function") {
      window.NENA.initGlobal();
    } else {
      console.error("❌ NENA.initGlobal niet gevonden");
    }

    // 2) Scroll animatie functie definiëren (gebruikt door loader)
    window.NENA.initScrollAnimation = function () {
      console.log("🎬 NENA.initScrollAnimation");

      let scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".loader-wrapper",
          start: "top top",
          end: "+=3000",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: false
        }
      });

      // Hero–deel aan timeline toevoegen
      if (typeof window.NENA.addHeroToTimeline === "function") {
        window.NENA.addHeroToTimeline(scrollTl);
      }

      // TikTok–deel
      if (typeof window.NENA.addTikTokToTimeline === "function") {
        window.NENA.addTikTokToTimeline(scrollTl);
      }

      // GTA–reveal
      if (typeof window.NENA.addGtaRevealToTimeline === "function") {
        window.NENA.addGtaRevealToTimeline(scrollTl);
      }

      ScrollTrigger.refresh();
      console.log("✅ ScrollTrigger klaar");
    };

    // 3) Loader starten
    if (typeof window.NENA.initLoader === "function") {
      window.NENA.initLoader();
    } else {
      console.error("❌ NENA.initLoader niet gevonden");
    }
  });

})();
