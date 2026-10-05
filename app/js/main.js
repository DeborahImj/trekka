
// NAVBAR

const navBurger = document.querySelector('#navBurger');
const navMenu = document.querySelector('#navMenu');

navBurger.addEventListener('click', toggleNavMenu);

function toggleNavMenu() {
  navBurger.classList.toggle('active');
  navMenu.classList.toggle('active');
}
