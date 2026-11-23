/*
  PADLORE — Collections
  1. Phones: moves the thin violet line under the swipeable row of cards.
  2. Reveals the cards once when the section enters the screen
     (skipped with reduced motion and in the Shopify theme editor).
*/
(function () {
  function initProgress(section) {
    var rail = section.querySelector('[data-padlore-rail]');
    if (!rail) return;
    var ticking = false;

    function update() {
      ticking = false;
      var max = rail.scrollWidth - rail.clientWidth;
      var visible = rail.scrollWidth > 0 ? rail.clientWidth / rail.scrollWidth : 1;
      var thumb = Math.max(visible, 0.15);
      var ratio = max > 0 ? rail.scrollLeft / max : 0;
      // translateX is relative to the bar itself: travel = (1 / thumb - 1) bar widths
      section.style.setProperty('--padlore-rail-thumb', (thumb * 100).toFixed(2) + '%');
      section.style.setProperty('--padlore-rail-offset', (ratio * (1 / thumb - 1) * 100).toFixed(2) + '%');
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    }

    rail.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  function initReveal(section) {
    if (!('IntersectionObserver' in window)) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.Shopify && window.Shopify.designMode) return;
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
      { threshold: 0.2 }
    );
    observer.observe(section);
  }

  function start() {
    document.querySelectorAll('[data-padlore-collections]').forEach(function (section) {
      initProgress(section);
      initReveal(section);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  // Theme editor: re-run when the section is added or re-rendered.
  document.addEventListener('shopify:section:load', start);
})();
