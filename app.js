const { body } = document;
const menuBtn = document.querySelector('#menu-btn');
const menuContainer = document.querySelector('.menu-container');
const imageContainer = document.querySelector('.image-container');
const navLinks = document.querySelector('.nav-links').childNodes;

const openMenu = () => {
  menuContainer.style.display = 'block';
  body.style.overflow = 'hidden';
};

const closeMenu = () => {
  menuContainer.style.display = 'none';
  body.style.overflow = 'initial';
};

menuBtn.addEventListener('click', openMenu);
imageContainer.addEventListener('click', closeMenu);
navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});
