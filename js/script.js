document.addEventListener('DOMContentLoaded', function () {
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  var navbar = document.querySelector('.navbar');
  var toggle = document.querySelector('.nav-toggle');

  if (toggle && navbar) {
    toggle.addEventListener('click', function () {
      var isOpen = navbar.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu after clicking a link (mobile)
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        navbar.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* --- Accordion -------------------------------------------------
     Every .acc-trigger controls the panel named by aria-controls.
     Panels start closed (hidden in the markup, so they are closed
     even if this script never runs — the content is still in the
     DOM for search engines and for Ctrl+F). Independent toggles:
     opening one does not close the others. */
  var triggers = document.querySelectorAll('.acc-trigger');

  function setPanel(trigger, open) {
    var panel = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!panel) return;
    trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.hidden = !open;
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener('click', function () {
      setPanel(trigger, trigger.getAttribute('aria-expanded') !== 'true');
    });
  });

  /* Category strip: open the matching panel and scroll to it. */
  document.querySelectorAll('.cat-nav-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-target');
      var trigger = document.querySelector('.acc-trigger[aria-controls="' + id + '"]');
      if (!trigger) return;
      setPanel(trigger, true);
      if (trigger.scrollIntoView) trigger.scrollIntoView({ behavior: 'smooth', block: 'center' });
      trigger.focus({ preventScroll: true });
    });
  });

  /* Deep link support: /menus.html#panel-lunches opens that category. */
  if (window.location.hash) {
    var target = document.querySelector('.acc-trigger[aria-controls="' + window.location.hash.slice(1) + '"]');
    if (target) {
      setPanel(target, true);
      if (target.scrollIntoView) target.scrollIntoView({ block: 'center' });
    }
  }
});
