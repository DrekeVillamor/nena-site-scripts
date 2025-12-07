// loader.js
window.NENA = window.NENA || {};

window.NENA.initLoader = function () {
  console.log("🎬 NENA.initLoader");

  // Basisstates voor loader
  gsap.set([".loader-circle", ".loader-text", ".scroll-indicator"], {
    visibility: "visible"
  });

  gsap.set(".loader-circle", { x: 0, y: 0, opacity: 1 });
  gsap.set(".loader-text",   { opacity: 0, x: 40 });
  gsap.set(".scroll-indicator", { opacity: 0, y: 10 });

  let loaderTl = gsap.timeline({
    onComplete: () => {
      console.log("✅ Loader klaar, scroll animatie starten");
      if (window.NENA && typeof window.NENA.initScrollAnimation === "function") {
        window.NENA.initScrollAnimation();
      } else {
        console.warn("⚠️ NENA.initScrollAnimation niet gevonden");
      }
    }
  });

  loaderTl
    .to(".loader-circle", {
      y: -150,
      duration: 1.1,
      ease: "power2.out"
    })
    .to(".loader-circle", {
      y: 0,
      duration: 1,
      ease: "power1.out"
    })
    .to(".loader-circle", {
      y: -90,
      duration: 0.9,
      ease: "power2.out"
    })
    .to(".loader-circle", {
      y: 0,
      duration: 0.8,
      ease: "power1.out"
    })
    // Circle naar rechts + text verschijnt
    .to(".loader-circle", {
      x: 340,
      duration: 1.2,
      ease: "power2.inOut"
    })
    .to(
      ".loader-text",
      {
        opacity: 1,
        x: 0,
        duration: 0.7,
        ease: "power2.out"
      },
      "-=0.5"
    )
    // Circle verdwijnt + scroll indicator verschijnt
    .to(
      ".loader-circle",
      {
        opacity: 0,
        duration: 0.25,
        ease: "power1.out"
      },
      "-=0.2"
    )
    .to(".scroll-indicator", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out"
    });

  // Bob-effect op scroll-indicator
  gsap.to(".scroll-indicator", {
    y: 18,
    repeat: -1,
    yoyo: true,
    duration: 1.1,
    ease: "power1.inOut",
    delay: loaderTl.duration()
  });
};
