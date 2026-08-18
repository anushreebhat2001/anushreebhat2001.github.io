(function () {
  var root = document.documentElement;
  var saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  if (saved === 'dark' || saved === 'light') root.setAttribute('data-theme', saved);

  function currentTheme() {
    var attr = root.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  var btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ---- Project filter (projects.html) ---- */
  var filterBar = document.querySelector('.filters');
  if (filterBar) {
    var buttons = filterBar.querySelectorAll('.filter-btn');
    var cards = document.querySelectorAll('.proj[data-category]');
    var countEl = document.querySelector('.filter-count');

    function applyFilter(cat) {
      var shown = 0;
      cards.forEach(function (card) {
        var match = cat === 'all' || card.getAttribute('data-category') === cat;
        card.hidden = !match;
        if (match) shown++;
      });
      if (countEl) {
        countEl.textContent = shown + (shown === 1 ? ' project' : ' projects');
      }
    }

    buttons.forEach(function (b) {
      b.addEventListener('click', function () {
        buttons.forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        applyFilter(b.getAttribute('data-filter'));
      });
    });

    applyFilter('all');
  }
})();
