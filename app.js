const { body } = document;
let toggleNav = false;
const menuBtn = document.querySelector('#menu-btn');
const menuContainer = document.querySelector('.menu-container');
const closeBtn = document.querySelector('.image-container');
const navLinks = document.querySelector('.nav-links').childNodes;

const openMenu = () => {
  if (toggleNav === false) {
    menuContainer.style.display = 'block';
    body.style.overflow = 'hidden';
    toggleNav = true;
  }
};

const closeMenu = () => {
  if (toggleNav === true) {
    menuContainer.style.display = ' none';
    body.style.overflow = 'initial';
    toggleNav = false;
  }
};

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
