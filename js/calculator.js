/* =========================================================
   Chef Gabe Catering — event estimate calculator
   ---------------------------------------------------------
   Drives the quote calculator on contact.html.

   Prices live in the markup as data-price attributes (numbers are
   language-independent, so they do NOT belong in translations.js).
   Labels come from the dictionary by key, so the itemised summary
   re-renders in the right language when the ES/EN toggle fires.

   It also writes a plain-text version of the same breakdown into the
   hidden #estimate-summary textarea, so the full itemisation rides
   along with the Netlify form submission.

   The same render pass writes a machine-readable twin of that
   breakdown into #line-items-json (a JSON array of
   { category, guests_or_qty, unit_price, subtotal }) and the bare
   grand total into #estimate-total, so the submission can be loaded
   straight into the admin dashboard's quotes table. Those two carry
   the canonical English category names on purpose: the stored record
   should not change shape depending on which language the visitor
   happened to be browsing in.
   ========================================================= */
(function () {
  'use strict';

  var form, list, totalEl, noteEl, hiddenField, jsonField, totalField;

  function lang() {
    var l = document.documentElement.getAttribute('lang');
    return (typeof translations !== 'undefined' && translations[l]) ? l : 'es';
  }

  function t(key) {
    var dict = (typeof translations !== 'undefined') ? translations[lang()] : null;
    return (dict && Object.prototype.hasOwnProperty.call(dict, key)) ? dict[key] : key;
  }

  /* Canonical English label, whatever the page is currently showing.
     Falls back to the displayed label if the English dictionary is
     missing, so a lookup miss degrades to a readable name rather than
     a bare key. */
  function tEn(key) {
    var dict = (typeof translations !== 'undefined') ? translations.en : null;
    return (dict && Object.prototype.hasOwnProperty.call(dict, key)) ? dict[key] : t(key);
  }

  /* 1640 -> "$1,640". Whole dollars only: every price on the menu is a
     whole number, so cents would be noise. */
  function money(n) {
    return '$' + Math.round(n).toLocaleString('en-US');
  }

  function num(el, fallback) {
    var v = parseInt(el && el.value, 10);
    return (isNaN(v) || v < 0) ? fallback : v;
  }

  /* Collects the current selection as a list of line items.
     Each: { label, detail, amount, plain, category, qty, unitPrice }
     - label/detail/plain are display strings in the current language
     - category/qty/unitPrice feed the JSON payload and stay language-
       independent (English category name, plain numbers) */
  function collect() {
    var lines = [];

    // Per-guest categories
    document.querySelectorAll('.calc-card[data-kind="category"]').forEach(function (card) {
      var check = card.querySelector('.calc-check');
      if (!check || !check.checked) return;
      var price = parseFloat(card.getAttribute('data-price')) || 0;
      var guests = num(card.querySelector('.calc-guest-input'), 0);
      if (guests <= 0) return;
      var label = t(card.getAttribute('data-label-key'));
      var amount = price * guests;
      lines.push({
        label: label,
        detail: guests + ' ' + t('calcGuestsWord') + ' × ' + money(price),
        amount: amount,
        plain: label + ': ' + guests + ' ' + t('calcGuestsWord') + ' x ' + money(price) + ' = ' + money(amount),
        category: tEn(card.getAttribute('data-label-key')),
        qty: guests,
        unitPrice: price
      });
    });

    // Flat-fee add-ons with a quantity
    document.querySelectorAll('.calc-card[data-kind="addon"]').forEach(function (card) {
      var qty = num(card.querySelector('.calc-qty-input'), 0);
      if (qty <= 0) return;
      var price = parseFloat(card.getAttribute('data-price')) || 0;
      var label = t(card.getAttribute('data-label-key'));
      var amount = price * qty;
      lines.push({
        label: label,
        detail: '×' + qty + ' · ' + money(price) + ' ' + t('calcEachWord'),
        amount: amount,
        plain: label + ' x' + qty + ' = ' + money(amount),
        category: tEn(card.getAttribute('data-label-key')),
        qty: qty,
        unitPrice: price
      });
    });

    /* Flat service fee — mandatory, not a choice. It is appended to every
       estimate that has at least one other line. An empty selection is
       not an estimate yet, so it stays at zero rather than showing a
       lone $150. */
    var delivery = document.getElementById('calc-delivery');
    if (delivery && lines.length) {
      var fee = parseFloat(delivery.getAttribute('data-price')) || 0;
      var dLabel = t('calcDeliveryLabel');
      lines.push({
        label: dLabel,
        detail: money(fee),
        amount: fee,
        plain: dLabel + ': ' + money(fee),
        category: tEn('calcDeliveryLabel'),
        qty: 1,
        unitPrice: fee
      });
    }

    return lines;
  }

  function render() {
    if (!list) return;
    var lines = collect();
    var total = lines.reduce(function (sum, l) { return sum + l.amount; }, 0);

    list.textContent = '';

    if (!lines.length) {
      var empty = document.createElement('p');
      empty.className = 'calc-empty';
      empty.textContent = t('calcEmpty');
      list.appendChild(empty);
    } else {
      lines.forEach(function (l) {
        var row = document.createElement('div');
        row.className = 'calc-row';

        var left = document.createElement('div');
        left.className = 'calc-row-label';
        var name = document.createElement('span');
        name.className = 'calc-row-name';
        name.textContent = l.label;
        var detail = document.createElement('span');
        detail.className = 'calc-row-detail';
        detail.textContent = l.detail;
        left.appendChild(name);
        left.appendChild(detail);

        var amt = document.createElement('span');
        amt.className = 'calc-row-amount';
        amt.textContent = money(l.amount);

        row.appendChild(left);
        row.appendChild(amt);
        list.appendChild(row);
      });
    }

    if (totalEl) totalEl.textContent = money(total);

    // Plain-text breakdown for the form submission
    if (hiddenField) {
      hiddenField.value = lines.length
        ? lines.map(function (l) { return l.plain; }).join('. ') +
          '. ' + t('calcTotalLabel') + ': ' + money(total) + '.'
        : '';
    }

    /* Structured twin of the same breakdown. Rounded the same way the
       displayed figures are, so estimate_total always agrees with the
       total on screen. An empty selection submits empty strings rather
       than '[]'/'0' — no estimate was built, and a stray zero-dollar
       quote in the dashboard would be worse than a blank one. */
    if (jsonField) {
      jsonField.value = lines.length
        ? JSON.stringify(lines.map(function (l) {
            return {
              category: l.category,
              guests_or_qty: l.qty,
              unit_price: l.unitPrice,
              subtotal: Math.round(l.amount)
            };
          }))
        : '';
    }

    if (totalField) {
      totalField.value = lines.length ? String(Math.round(total)) : '';
    }
  }

  function init() {
    form = document.querySelector('.calc');
    if (!form) return;

    list = document.getElementById('calc-summary-list');
    totalEl = document.getElementById('calc-total');
    noteEl = document.getElementById('calc-note');
    hiddenField = document.getElementById('estimate-summary');
    jsonField = document.getElementById('line-items-json');
    totalField = document.getElementById('estimate-total');

    /* Checking a category reveals its own guest input. Each category
       keeps a separate count on purpose — 30 for dinners and 80 for
       desserts is a normal request. */
    document.querySelectorAll('.calc-card[data-kind="category"]').forEach(function (card) {
      var check = card.querySelector('.calc-check');
      var guestWrap = card.querySelector('.calc-guests');
      if (!check || !guestWrap) return;
      check.addEventListener('change', function () {
        guestWrap.hidden = !check.checked;
        card.classList.toggle('is-selected', check.checked);
        if (check.checked) {
          var input = guestWrap.querySelector('.calc-guest-input');
          if (input && !input.value) input.value = input.getAttribute('data-default') || '50';
        }
        render();
      });
    });

    form.addEventListener('input', render);
    form.addEventListener('change', render);

    // Category names in the summary must follow the language toggle.
    document.addEventListener('languagechange', render);

    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.ChefGabeCalc = { render: render, collect: collect };
})();
