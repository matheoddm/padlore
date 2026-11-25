/*
  PADLORE — Featured designs
  1. Phones: moves the violet bar and updates the "01 — 04" counter while the
     row of cards is swiped.
  2. Phones: marks the snapped card as "is-active" (frosted bar visible).
  3. After the entrance has played, removes the stagger delays so hover
     reacts immediately (adds "is-settled").
*/
(function () {
  function initRail(section) {
    var rail = section.querySelector('[data-padlore-rail]');
    var now = section.querySelector('[data-padlore-rail-now]');
    if (!rail) return;
    var items = rail.children;
    var ticking = false;

    function update() {
      ticking = false;
      var max = rail.scrollWidth - rail.clientWidth;
      var visible = rail.scrollWidth > 0 ? rail.clientWidth / rail.scrollWidth : 1;
      var thumb = Math.max(visible, 0.15);
      var ratio = max > 0 ? rail.scrollLeft / max : 0;
      section.style.setProperty('--padlore-rail-thumb', (thumb * 100).toFixed(2) + '%');
      section.style.setProperty('--padlore-rail-offset', (ratio * (1 / thumb - 1) * 100).toFixed(2) + '%');

      if (now && items.length) {
        var index = Math.round(ratio * (items.length - 1)) + 1;
        now.textContent = (index < 10 ? '0' : '') + index;
      }
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

  // Phones: the card snapped in the row is "active" (shows the frosted bar).
  function initActive(section) {
    var rail = section.querySelector('[data-padlore-rail]');
    if (!rail || !('IntersectionObserver' in window)) return;
    var items = Array.prototype.slice.call(rail.children);
    if (!items.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio < 0.7) {
            entry.target.classList.remove('is-active');
            return;
          }
          items.forEach(function (item) {
            item.classList.toggle('is-active', item === entry.target);
          });
        });
      },
      { root: rail, threshold: [0, 0.7, 1] }
    );
    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  function initSettle(section) {
    if (!('MutationObserver' in window)) return;
    var watcher = new MutationObserver(function () {
      if (!section.classList.contains('is-revealed')) return;
      watcher.disconnect();
      window.setTimeout(function () {
        section.classList.add('is-settled');
      }, 1400);
    });
    watcher.observe(section, { attributes: true, attributeFilter: ['class'] });
  }

  function start() {
    document.querySelectorAll('.padlore-products').forEach(function (section) {
      initRail(section);
      initActive(section);
      initSettle(section);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  document.addEventListener('shopify:section:load', start);
})();
