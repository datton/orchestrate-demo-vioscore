// Full-Stack: page behaviour goes here. The site works without it.
// Sortable tables: each column header becomes a button. Without JavaScript the tables stay in their written order.
(function () {
  function cellValue(row, col) {
    var cell = row.children[col];
    var text = cell ? cell.textContent.trim() : '';
    var n = parseFloat(text.replace('+', ''));
    return isNaN(n) ? text.toLowerCase() : n;
  }

  function makeSortable(table) {
    var heads = table.querySelectorAll('thead th');
    var body = table.tBodies[0];
    if (!body) return;
    Array.prototype.forEach.call(heads, function (th, col) {
      var label = th.textContent;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = label;
      btn.style.cssText = 'font: inherit; color: inherit; background: none; border: 0; padding: 0; cursor: pointer; text-align: inherit;';
      th.textContent = '';
      th.appendChild(btn);
      btn.addEventListener('click', function () {
        var asc = th.getAttribute('aria-sort') !== 'ascending';
        Array.prototype.forEach.call(heads, function (h) { h.removeAttribute('aria-sort'); });
        th.setAttribute('aria-sort', asc ? 'ascending' : 'descending');
        var rows = Array.prototype.slice.call(body.rows);
        rows.sort(function (a, b) {
          var x = cellValue(a, col), y = cellValue(b, col);
          if (x === y) return 0;
          return (x > y ? 1 : -1) * (asc ? 1 : -1);
        });
        rows.forEach(function (r) { body.appendChild(r); });
      });
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('table.sortable'), makeSortable);
  });
})();
