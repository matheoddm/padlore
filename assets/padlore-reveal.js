/*
  PADLORE — shared soft reveal.
  Any element with [data-padlore-reveal] gets data-motion="on", then the class
  "is-revealed" once it enters the screen. The CSS of each section decides
  what moves. Skipped with reduced motion and in the Shopify theme editor.
*/
(function () {
  if (!('IntersectionObserver' in window)) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (window.Shopify && window.Shopify.designMode) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  function start() {
    document.querySelectorAll('[data-padlore-reveal]').forEach(function (el) {
      if (el.dataset.motion === 'on') return;
      el.dataset.motion = 'on';
      observer.observe(el);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
