const { body } = document;
const menuBtn = document.querySelector('#menu-btn');
const menuContainer = document.querySelector('.menu-container');
const closeBtn = document.querySelector('.image-container');
const navLinks = document.querySelector('.nav-links').childNodes;

const openMenu = () => {
  menuContainer.style.transform = 'translateX(0)';
  body.style.overflow = 'hidden';
};

const closeMenu = () => {
  menuContainer.style.transform = 'translateX(-100%)';
  body.style.overflow = 'initial';
};

menuBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
