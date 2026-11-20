const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', nav.classList.contains('open'));
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
