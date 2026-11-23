/*
  PADLORE — Kinetic Index
  Switches the section to "motion" mode, reveals its lines once when it enters
  the screen, and marks the line crossing the middle of the screen as active.
  Does nothing with reduced motion or in the Shopify theme editor
  (the CSS then shows every title filled, with no movement).
*/
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.Shopify && window.Shopify.designMode) return;

  function init(section) {
    if (section.dataset.motion === 'on') return;
    var items = Array.prototype.slice.call(section.querySelectorAll('.padlore-index__item'));
    if (!items.length) return;

    section.dataset.motion = 'on';

    // 1. Reveal the lines once, when about a quarter of the section is visible.
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          section.classList.add('is-revealed');
          revealObserver.disconnect();
        });
      },
      { threshold: 0.25 }
    );
    revealObserver.observe(section);

    // 2. The line inside a thin band in the middle of the screen is "active".
    var activeObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          items.forEach(function (item) {
            item.classList.toggle('is-active', item === entry.target);
          });
        });
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );
    items.forEach(function (item) {
      activeObserver.observe(item);
    });
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
