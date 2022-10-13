const data = [
  {
    id: 1,
    name: 'Tonic',
    tags: [
      { name: 'html', shouldShowOnMobile: true },
      { name: 'css', shouldShowOnMobile: true },
      { name: 'javascript', shouldShowOnMobile: true },
      { name: 'Ruby on rails', shouldShowOnMobile: false },
    ],
    mobile: {
      image: './images/tonic.jpg',
      alt: 'mobile-tonic-image',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      frame: [
        'CANOPY',
        '<img src="./images/Counter.svg" alt="separator" />',
        'Back End Dev',
        '<img src="./images/Counter.svg" alt="separator" />',
        2015,
      ],
    },
    desktop: {
      image: './images/Desktop-tonic2.jpg',
      alt: 'desktop-tonic-image',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      frame: [
        'CANOPY',
        '<img src="./images/Counter.svg" alt="separator" />',
        'Back End Dev',
        '<img src="./images/Counter.svg" alt="separator" />',
        2015,
      ],
      rowRevers: false,
    },
  },

  {
    id: 2,
    name: 'Multi-Post Stories',
    tags: [
      { name: 'html', shouldShowOnMobile: true },
      { name: 'css', shouldShowOnMobile: true },
      { name: 'javascript', shouldShowOnMobile: true },
      { name: 'Ruby on rails', shouldShowOnMobile: false },
    ],
    mobile: {
      image: './images/Multi-Post-Stories.jpg',
      alt: 'mobile-multi-post-stories-image',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      frame: [
        'CANOPY',
        '<img src="./images/Counter.svg" alt="separator" />',
        'Back End Dev',
        '<img src="./images/Counter.svg" alt="separator" />',
        2015,
      ],
    },

    desktop: {
      image: './images/Desktop-Multi-Post-Stories2.jpg',
      alt: 'desktop-multi-post-stories-image',
      description:
        'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
      frame: [
        'FACEBOOK',
        '<img src="./images/Counter.svg" alt="separator" />',
        'Full Stack Dev',
        '<img src="./images/Counter.svg" alt="separator" />',
        2015,
      ],
      rowRevers: true,
    },
  },

  {
    id: 3,
    name: 'Tonic',
    tags: [
      { name: 'html', shouldShowOnMobile: true },
      { name: 'css', shouldShowOnMobile: true },
      { name: 'javascript', shouldShowOnMobile: true },
      { name: 'Ruby on rails', shouldShowOnMobile: false },
    ],
    mobile: {
      image: './images/tonic2.jpg',
      alt: 'mobile-tonic-2-image',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      frame: [
        'CANOPY',
        '<img src="./images/Counter.svg" alt="separator" />',
        'Back End Dev',
        '<img src="./images/Counter.svg" alt="separator" />',
        2015,
      ],
    },
    desktop: {
      image: './images/Desktop-tonic.jpg',
      alt: 'desktop-tonic-2-image',
      description:
        "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
      frame: [
        'FACEBOOK',
        '<img src="./images/Counter.svg" alt="separator" />',
        'Full Stack Dev',
        '<img src="./images/Counter.svg" alt="separator" />',
        2015,
      ],
      rowRevers: false,
    },
  },

  {
    id: 4,
    name: 'Multi-Post Stories',
    tags: [
      { name: 'html', shouldShowOnMobile: true },
      { name: 'css', shouldShowOnMobile: true },
      { name: 'javascript', shouldShowOnMobile: true },
      { name: 'Ruby on rails', shouldShowOnMobile: false },
    ],
    mobile: {
      image: './images/Multi-Post-Stories2.jpg',
      alt: 'mobile-multi-post-stories-2-image',
      description:
        'A daily selection of privately personalized reads; no accounts or sign-ups required.',
      frame: [
        'CANOPY',
        '<img src="./images/Counter.svg" alt="separator" />',
        'Back End Dev',
        '<img src="./images/Counter.svg" alt="separator" />',
        2015,
      ],
    },
    desktop: {
      image: './images/Desktop-Multi-Post-Stories.jpg',
      alt: 'desktop-multi-post-stories-2-image',
      description:
        'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
      frame: [
        'Uber',
        '<img src="./images/Counter.svg" alt="separator" />',
        'Lead Developer',
        '<img src="./images/Counter.svg" alt="separator" />',
        2018,
      ],
      rowRevers: true,
    },
  },
];

export default data;
