
// NAVBAR

const navBurger = document.querySelector('#navBurger');
const navMenu = document.querySelector('#navMenu');
const navMenuLinks = document.querySelectorAll('.nav-menu-link');

navBurger.addEventListener('click', toggleNavMenu);

function toggleNavMenu() {
  navBurger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

Array.from(navMenuLinks).forEach(elememt => elememt.addEventListener('click', toggleNavMenu));

// CONTACT FORM

const contactForm = document.getElementById('waitlistForm');
const successMessage = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactForm.style.display = 'none';
  successMessage.hidden = false;
});

