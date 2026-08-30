/* =========================================================
   Chef Gabe Catering — language switching
   ---------------------------------------------------------
   Reads the saved preference from localStorage (default "es"),
   applies it to every [data-i18n] element on the page, and
   wires up the ES / EN toggle in the utility bar.

   Reusable as-is on every page: it only ever touches elements
   that carry a data-i18n* attribute, so a new page just needs
   its own keys added to js/translations.js.

   Load order matters:
     <script src="js/translations.js"></script>
     <script src="js/i18n.js"></script>
   ========================================================= */
(function () {
  'use strict';

  var STORAGE_KEY = 'chefgabe-lang';
  var DEFAULT_LANG = 'es';
  var SUPPORTED = ['es', 'en'];

  /* localStorage throws in some privacy modes — never let that
     break the page, just fall back to the default language. */
  function readStoredLang() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      return SUPPORTED.indexOf(saved) !== -1 ? saved : null;
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* Preference just won't persist this session. */
    }
  }

  /* Renders one line, turning **like this** into <strong>. Built as real
     element and text nodes — never innerHTML — so a dictionary string
     still cannot inject markup. */
  function appendInline(el, text) {
    var parts = text.split('**');
    for (var i = 0; i < parts.length; i++) {
      if (!parts[i]) continue;
      if (i % 2 === 1) {
        var strong = document.createElement('strong');
        strong.appendChild(document.createTextNode(parts[i]));
        el.appendChild(strong);
      } else {
        el.appendChild(document.createTextNode(parts[i]));
      }
    }
  }

  /* Writes a translated string as real text nodes, turning "\n"
     into <br>. Avoids innerHTML so the dictionary can never
     inject markup. */
  function setText(el, value) {
    var lines = String(value).split('\n');
    el.textContent = '';
    for (var i = 0; i < lines.length; i++) {
      if (i > 0) el.appendChild(document.createElement('br'));
      appendInline(el, lines[i]);
    }
  }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;

    document.documentElement.setAttribute('lang', lang);

    var missing = [];

    // Text content
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        setText(nodes[i], dict[key]);
      } else {
        missing.push(key);
      }
    }

    // Translatable attributes
    var attrMap = [
      ['data-i18n-alt', 'alt'],
      ['data-i18n-aria-label', 'aria-label'],
      ['data-i18n-content', 'content'],
      ['data-i18n-placeholder', 'placeholder']
    ];
    for (var a = 0; a < attrMap.length; a++) {
      var dataAttr = attrMap[a][0];
      var targetAttr = attrMap[a][1];
      var attrNodes = document.querySelectorAll('[' + dataAttr + ']');
      for (var j = 0; j < attrNodes.length; j++) {
        var aKey = attrNodes[j].getAttribute(dataAttr);
        if (Object.prototype.hasOwnProperty.call(dict, aKey)) {
          attrNodes[j].setAttribute(targetAttr, dict[aKey]);
        } else {
          missing.push(aKey);
        }
      }
    }

    if (missing.length) {
      console.warn('[i18n] Missing "' + lang + '" keys:', missing.join(', '));
    }

    // Reflect state on the toggle
    var buttons = document.querySelectorAll('.lang-btn');
    for (var b = 0; b < buttons.length; b++) {
      var isActive = buttons[b].getAttribute('data-lang') === lang;
      buttons[b].classList.toggle('is-active', isActive);
      buttons[b].setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }

    document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang: lang } }));
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) return;
    storeLang(lang);
    applyLang(lang);
  }

  function init() {
    if (typeof translations === 'undefined') {
      console.error('[i18n] translations.js must load before i18n.js');
      return;
    }

    var lang = readStoredLang() || DEFAULT_LANG;
    applyLang(lang);

    var buttons = document.querySelectorAll('.lang-btn');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (ev) {
        ev.preventDefault();
        setLang(this.getAttribute('data-lang'));
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Exposed so other scripts / future pages can switch programmatically.
  window.ChefGabeI18n = { setLang: setLang, getLang: function () { return document.documentElement.lang; } };
})();
