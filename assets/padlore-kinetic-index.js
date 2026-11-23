/*
  PADLORE — Editorial Index
  Soft fade-in of the lines, once, when the section enters the screen.
  Does nothing with reduced motion or in the Shopify theme editor.
*/
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.Shopify && window.Shopify.designMode) return;

  function init(section) {
    if (section.dataset.motion === 'on') return;
    section.dataset.motion = 'on';

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          section.classList.add('is-revealed');
          observer.disconnect();
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(section);
  }

  function start() {
    document.querySelectorAll('[data-padlore-index]').forEach(init);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
