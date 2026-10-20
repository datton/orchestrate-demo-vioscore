// UI/UX: mobile menu toggle.
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.nav-toggle');
  var list = document.getElementById('nav-list');
  if (!btn || !list) return;
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!open));
    list.hidden = open;
  });
});
