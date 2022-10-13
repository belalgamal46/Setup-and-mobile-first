import data from './Data.js';

const { body } = document;
const menuBtn = document.querySelector('#menu-btn');
const menuContainer = document.querySelector('.menu-container');
const closeBtn = document.querySelector('.image-container');
const navLinks = document.querySelector('.nav-links').childNodes;
const heroSection = document.querySelector('.hero-section');

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

const addClassesToElement = ({ element, classList }) => {
  if (!classList || (Array.isArray(classList) && !classList.length)) {
    return;
  }
  element.classList.add(...classList);
};

const addBodyToElement = ({ element, children }) => {
  if (!children || (Array.isArray(children) && !children.length)) {
    return;
  }
  element.append(...children);
};

const addAttributesToElement = ({ element, attributes }) => {
  // eslint-disable-next-line guard-for-in, no-restricted-syntax
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
};

const createElement = ({
  tagName,
  children,
  classList,
  text,
  attributes = {},
}) => {
  const element = document.createElement(tagName);
  addClassesToElement({ element, classList });
  addBodyToElement({ element, children });
  addAttributesToElement({ element, attributes });
  if (text) {
    element.innerHTML = text;
  }
  return element;
};

const createSnapshotPortfolio = ({
  mobileImage,
  desktopImage,
  desktopAlt,
  mobileAlt,
}) => {
  const mobilePortfolioImage = createElement({
    tagName: 'img',
    classList: ['mobile-image'],
    attributes: { src: mobileImage, alt: mobileAlt },
  });
  const desktopPortfolioImage = createElement({
    tagName: 'img',
    classList: ['desktop-image'],
    attributes: {
      src: desktopImage,
      alt: desktopAlt,
    },
  });
  return createElement({
    tagName: 'div',
    classList: ['snapshoot-portfolio'],
    children: [mobilePortfolioImage, desktopPortfolioImage],
  });
};

const createTags = (tags) => {
  const tagList = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const tag of tags) {
    tagList.push(
      createElement({
        tagName: 'li',
        text: tag.name,
        classList: tag.shouldShowOnMobile ? [] : ['hidden'],
        // eslint-disable-next-line comma-dangle
      })
    );
  }
  const ul = createElement({
    tagName: 'ul',
    classList: ['tag'],
    children: tagList,
  });

  return createElement({ tagName: 'div', classList: ['tags'], children: [ul] });
};

const createFrames = (frames) => {
  const frameList = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const frame of frames) {
    frameList.push(createElement({ tagName: 'li', text: frame }));
  }

  const ul = createElement({ tagName: 'ul', children: frameList });

  return createElement({
    tagName: 'div',
    classList: ['frame'],
    children: [ul],
  });
};

const createPrimaryText = (textData) => {
  const cardTitle = createElement({ tagName: 'h2', text: textData.name });
  const frames = createFrames(textData.desktop.frame);

  return createElement({
    tagName: 'div',
    classList: ['primary-text'],
    children: [cardTitle, frames],
  });
};

const createPortofolioDetails = (item) => {
  const primaryText = createPrimaryText(item);

  const description = createElement({
    tagName: 'p',
    text: item.desktop.description,
  });

  const tagsDiv = createTags(item.tags);

  const button = createElement({
    tagName: 'button',
    classList: ['btn'],
    attributes: { type: 'button', id: item.id },
    text: 'See Project',
  });

  const buttonDiv = createElement({
    tagName: 'div',
    classList: ['btn-container'],
    children: [button],
  });

  return createElement({
    tagName: 'div',
    classList: ['portofolio-details'],
    children: [primaryText, description, tagsDiv, buttonDiv],
  });
};

const createCardWorks = (data) => {
  const articles = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const item of data) {
    const reverseRowStatment = item.desktop.rowRevers ? 'row-reverse' : 'row';

    const snapshotElement = createSnapshotPortfolio({
      mobileImage: item.mobile.image,
      desktopImage: item.desktop.image,
      desktopAlt: item.desktop.alt,
      mobileAlt: item.mobile.alt,
    });

    const portfolioDetailsElement = createPortofolioDetails(item);

    const article = createElement({
      tagName: 'article',
      classList: ['card-works', reverseRowStatment],
      children: [snapshotElement, portfolioDetailsElement],
      attributes: { id: item.id },
    });

    articles.push(article);
  }

  return articles;
};

const createCardsContainer = (articleData) => {
  const cardWorks = createCardWorks(articleData);

  return createElement({
    tagName: 'div',
    classList: ['cards-container'],
    children: cardWorks,
  });
};

const createWorksSection = (data) => {
  const cardsContainer = createCardsContainer(data);

  const worksSection = createElement({
    tagName: 'section',
    classList: ['works'],
    attributes: { id: 'works-section' },
    children: [cardsContainer],
  });
  heroSection.after(worksSection);
};

createWorksSection(data);
