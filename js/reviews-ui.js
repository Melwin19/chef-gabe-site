/* =========================================================
   Chef Gabe Catering — review grid rendering
   ---------------------------------------------------------
   Renders js/reviews.js into the grid, one batch at a time.

   Generic on purpose: it reads reviews.length rather than assuming a
   count, so adding or removing reviews needs no change here. The
   "load more" button only exists while there is something left to
   reveal — with 6 reviews and a batch of 6, it never appears.

   Review text is customer copy and is never translated. Only the event
   type switches language, from the type_es / type_en fields.

   Load order:
     <script src="js/translations.js"></script>
     <script src="js/reviews.js"></script>
     <script src="js/i18n.js"></script>
     <script src="js/reviews-ui.js"></script>
   ========================================================= */
(function () {
  'use strict';

  var BATCH = 6;

  var grid, button, shown = 0;

  function lang() {
    var l = document.documentElement.getAttribute('lang');
    return (typeof translations !== 'undefined' && translations[l]) ? l : 'es';
  }

  function t(key) {
    var dict = (typeof translations !== 'undefined') ? translations[lang()] : null;
    return (dict && Object.prototype.hasOwnProperty.call(dict, key)) ? dict[key] : key;
  }

  var STAR_PATH = 'M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.4-5.8-3-5.8 3 1.1-6.4L2.6 9.4l6.5-.9z';

  function starRow(count) {
    var wrap = document.createElement('div');
    wrap.className = 'review-stars';
    wrap.setAttribute('role', 'img');
    wrap.setAttribute('aria-label', count + ' ' + t('rvStarsOf'));
    for (var i = 0; i < count; i++) {
      var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 24 24');
      svg.setAttribute('aria-hidden', 'true');
      svg.setAttribute('focusable', 'false');
      var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
      path.setAttribute('d', STAR_PATH);
      svg.appendChild(path);
      wrap.appendChild(svg);
    }
    return wrap;
  }

  function card(review) {
    var art = document.createElement('article');
    art.className = 'review-card';

    art.appendChild(starRow(review.stars));

    var text = document.createElement('p');
    text.className = 'review-text';
    // Customer's own words, verbatim, in whichever language they wrote.
    text.textContent = '“' + review.text + '”';
    art.appendChild(text);

    var foot = document.createElement('div');
    foot.className = 'review-foot';

    var name = document.createElement('p');
    name.className = 'review-name';
    name.textContent = '— ' + review.name;
    foot.appendChild(name);

    // Some reviews carry no event type; that line is simply omitted.
    var type = lang() === 'en' ? review.type_en : review.type_es;
    if (type) {
      var typeEl = document.createElement('p');
      typeEl.className = 'review-type';
      typeEl.textContent = type;
      foot.appendChild(typeEl);
    }

    art.appendChild(foot);
    return art;
  }

  function render() {
    if (!grid) return;
    grid.textContent = '';
    for (var i = 0; i < shown && i < reviews.length; i++) {
      grid.appendChild(card(reviews[i]));
    }
    var done = shown >= reviews.length;
    if (button) {
      button.hidden = done;
      // Hide the wrapper too, otherwise its margin leaves a gap under
      // the grid once the button itself is gone.
      var wrap = button.closest('.center-btn');
      if (wrap) wrap.hidden = done;
    }
  }

  function showMore() {
    shown = Math.min(shown + BATCH, reviews.length);
    render();
  }

  /* ---------------------------------------------------------------
     Carousel used on the Our Food page. Same data, same card builder —
     three at a time with prev/next and dots, so the two pages can never
     show different versions of the same customer's words.
     --------------------------------------------------------------- */
  var carousel, dotsWrap, page = 0, PER_VIEW = 3;

  function pageCount() {
    return Math.max(1, Math.ceil(reviews.length / PER_VIEW));
  }

  function renderCarousel() {
    if (!carousel) return;
    var total = pageCount();
    if (page >= total) page = 0;
    if (page < 0) page = total - 1;

    carousel.textContent = '';
    var start = page * PER_VIEW;
    for (var i = start; i < start + PER_VIEW && i < reviews.length; i++) {
      carousel.appendChild(card(reviews[i]));
    }

    if (dotsWrap) {
      dotsWrap.textContent = '';
      for (var p = 0; p < total; p++) {
        var dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'carousel-dot' + (p === page ? ' is-active' : '');
        dot.setAttribute('aria-label', String(p + 1));
        dot.setAttribute('aria-current', p === page ? 'true' : 'false');
        (function (target) {
          dot.addEventListener('click', function () { page = target; renderCarousel(); });
        })(p);
        dotsWrap.appendChild(dot);
      }
      // A single page needs no controls at all.
      dotsWrap.hidden = total < 2;
    }
    var nav = document.querySelectorAll('.carousel-arrow');
    for (var n = 0; n < nav.length; n++) nav[n].hidden = total < 2;
  }

  function initCarousel() {
    carousel = document.getElementById('reviews-carousel');
    if (!carousel) return;
    dotsWrap = document.getElementById('carousel-dots');

    var prev = document.getElementById('carousel-prev');
    var next = document.getElementById('carousel-next');
    if (prev) prev.addEventListener('click', function () { page--; renderCarousel(); });
    if (next) next.addEventListener('click', function () { page++; renderCarousel(); });

    renderCarousel();
    document.addEventListener('languagechange', renderCarousel);
  }

  function init() {
    if (typeof reviews === 'undefined') {
      console.error('[reviews] reviews.js must load before reviews-ui.js');
      return;
    }

    initCarousel();

    grid = document.getElementById('reviews-grid');
    if (!grid) return;

    button = document.getElementById('reviews-more');
    shown = Math.min(BATCH, reviews.length);
    render();

    if (button) button.addEventListener('click', showMore);

    // Event types follow the language toggle; review text does not.
    document.addEventListener('languagechange', render);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.ChefGabeReviews = {
    render: render,
    showMore: showMore,
    shownCount: function () { return shown; },
    batchSize: BATCH
  };
})();
