// Mobile navigation toggle
var menuBtn = document.getElementById('menuBtn');
var mobileNav = document.getElementById('mobileNav');
if (menuBtn && mobileNav) {
  menuBtn.addEventListener('click', function () {
    var open = mobileNav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.textContent = open ? '\u2715' : '\u2630';
  });
}

// Current year in footer
var year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Product category filter
var filters = document.querySelectorAll('.filter');
filters.forEach(function (btn) {
  btn.addEventListener('click', function () {
    filters.forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    var cat = btn.dataset.cat;
    document.querySelectorAll('.product').forEach(function (card) {
      card.style.display = (cat === 'All' || card.dataset.cat === cat) ? '' : 'none';
    });
  });
});

// Quote form (front-end only: shows a confirmation message)
var form = document.getElementById('quoteForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.reset();
    var note = document.getElementById('formNote');
    if (note) {
      note.hidden = false;
      setTimeout(function () { note.hidden = true; }, 5000);
    }
  });
}
