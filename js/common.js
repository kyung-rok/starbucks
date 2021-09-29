const searchEl = document.querySelector('.search');
const searchIel = searchEl.querySelector('input');

searchEl.addEventListener('click', function(){
  searchIel.focus();
});

searchIel.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchIel.setAttribute('placeholder', '통합검색');
});

searchIel.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchIel.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2021년