/* =========================================================
   Chef Gabe Catering — FAQ structured data (schema.org)
   ---------------------------------------------------------
   Builds the FAQPage JSON-LD from the questions and answers that are
   actually rendered in the .faq-accordion, then injects it into <head>.

   Reading the DOM rather than the dictionary is deliberate: Google
   requires the markup to match the visible copy, and this way it does
   by construction. Adding a question to contact.html is enough — the
   schema picks it up with no second place to edit.

   It also rebuilds on the i18n "languagechange" event, so after a
   visitor switches to English the markup describes the English text
   rather than the Spanish it replaced.

   Load AFTER js/i18n.js and after the FAQ markup.
   ========================================================= */
(function () {
  'use strict';

  var TAG_ID = 'faq-jsonld';

  function build() {
    var items = document.querySelectorAll('.faq-accordion .acc-item');
    if (!items.length) return;

    var questions = [];
    for (var i = 0; i < items.length; i++) {
      var q = items[i].querySelector('.faq-q');
      var a = items[i].querySelector('.faq-a');
      if (!q || !a) continue;

      var question = q.textContent.trim();
      var answer = a.textContent.trim();
      // A half-filled pair would be an invalid Question entity.
      if (!question || !answer) continue;

      questions.push({
        '@type': 'Question',
        'name': question,
        'acceptedAnswer': { '@type': 'Answer', 'text': answer }
      });
    }

    if (!questions.length) return;

    var tag = document.getElementById(TAG_ID);
    if (!tag) {
      tag = document.createElement('script');
      tag.type = 'application/ld+json';
      tag.id = TAG_ID;
      document.head.appendChild(tag);
    }

    tag.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': questions
    }, null, 2);
  }

  document.addEventListener('languagechange', build);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
