import './lesson_8.scss';

const btn = document.querySelector('.toggle');
const nav = document.querySelector('.global-nav');

btn.addEventListener('click', () => {
  nav.classList.toggle('global-nav_expand');
});