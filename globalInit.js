// Global initial states + element selections

window.NENA = {
  elements: {},
  states: {}
};

// Verzamel DOM elementen die door alle scripts nodig zijn
NENA.elements = {
  loaderCircle: document.querySelector(".loader-circle"),
  loaderText: document.querySelector(".loader-text"),
  scrollIndicator: document.querySelector(".scroll-indicator"),

  heroFirst: document.querySelector(".hero-name-first"),
  heroLast: document.querySelector(".hero-name-last"),
  heroQuote: document.querySelector(".hero-quote-wrapper"),

  tiktokCards: [
    document.querySelector(".tiktok-card-1 .w-video"),
    document.querySelector(".tiktok-card-2 .w-video"),
    document.querySelector(".tiktok-card-3 .w-video"),
    document.querySelector(".tiktok-card-4 .w-video"),
    document.querySelector(".tiktok-card-5 .w-video")
  ].filter(Boolean),

  wordOverlay: document.querySelector(".word-overlay"),
  wordText: document.querySelector(".word-text")
};

// Initial states worden door andere bestanden gebruikt
NENA.states.initialized = true;
