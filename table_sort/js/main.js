(function() {
  'use strict';

  var ths = document.getElementsByTagName('th');
  var i;
  var sortOrder = 1;

  for (i = 0; i < ths.length; i++) {
    ths[i].addEventListener('click', function() {
      var rows = Array.prototype.slice.call(document.querySelectorAll('tbody > tr'));

      var col = this.cellIndex;
      var type = this.dataset.type;

      rows.sort(function(a, b) {
        if (type === "number") {
          var _a = a.children[col].textContent * 1;
          var _b = b.children[col].textContent * 1;
        }
        if (type === "string") {
          var _a = a.children[col].textContent.toLowerCase();
          var _b = b.children[col].textContent.toLowerCase();
        }
        if (_a < _b) {
          return -1;
        }
        if (_a > _b) {
          return 1;
        }
        return 0;
      });

      var tbody = document.querySelector('tbody');

      while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
      }

      var j;
      for (j = 0; j < rows.length; j++) {
        tbody.appendChild(rows[j]);
      }

    });
  }

})();
