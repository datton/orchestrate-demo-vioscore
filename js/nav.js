// UI/UX: makes every data table scrollable and keyboard-reachable on narrow screens.
// The page reads fine without it; the tables just do not get their own scroll box.
document.addEventListener('DOMContentLoaded', function () {
  var tables = document.querySelectorAll('main table');
  Array.prototype.forEach.call(tables, function (table) {
    if (table.parentNode.classList.contains('table-wrap')) return;
    var cap = table.querySelector('caption');
    var wrap = document.createElement('div');
    wrap.className = 'table-wrap';
    wrap.setAttribute('role', 'region');
    wrap.setAttribute('tabindex', '0');
    wrap.setAttribute('aria-label', (cap ? cap.textContent.trim() : 'Data table') + ' (scrollable)');
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
  });
});
