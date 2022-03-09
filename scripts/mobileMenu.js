// mobileMenu.js

const body = document.querySelector('body');
const menuHamb = document.querySelector('.menu-hamb');
const menuX = document.querySelector('.menu-x');
const menuMobileContainer = document.querySelector('.menu-mobile-container');
const menuMobileBg = document.querySelector('.menu-mobile-bg');
const portfolioBtn = document.querySelector('.main-btn');
const aboutBtn = document.querySelector('.about-btn');
const archiveBtn = document.querySelector('.archive-btn');
const footerBtn = document.querySelector('.footer-btn');
const main = document.querySelectorAll('.main');

menuHamb.addEventListener('click', () => {
  body.style.height = '100vh';
  body.style.overflow = 'hidden';
  menuMobileContainer.style.display = 'flex';
  menuHamb.style.display = 'none';
  menuX.style.display = 'flex';
  menuMobileBg.style.display = 'flex';
  main.classList.add('.blur');
});

menuX.addEventListener('click', () => {
  body.style.height = 'auto';
  body.style.overflow = 'visible';
  menuMobileContainer.style.display = 'none';
  menuHamb.style.display = 'flex';
  menuX.style.display = 'none';
  menuMobileBg.style.display = 'none';
});

portfolioBtn.addEventListener('click', () => {
  body.style.height = 'auto';
  body.style.overflow = 'visible';
  menuMobileContainer.style.display = 'none';
  menuHamb.style.display = 'flex';
  menuX.style.display = 'none';
  menuMobileBg.style.display = 'none';
});

aboutBtn.addEventListener('click', () => {
  body.style.height = 'auto';
  body.style.overflow = 'visible';
  menuMobileContainer.style.display = 'none';
  menuHamb.style.display = 'flex';
  menuX.style.display = 'none';
  menuMobileBg.style.display = 'none';
});

archiveBtn.addEventListener('click', () => {
  body.style.height = 'auto';
  body.style.overflow = 'visible';
  menuMobileContainer.style.display = 'none';
  menuHamb.style.display = 'flex';
  menuX.style.display = 'none';
  menuMobileBg.style.display = 'none';
});

footerBtn.addEventListener('click', () => {
  body.style.height = 'auto';
  body.style.overflow = 'visible';
  menuMobileContainer.style.display = 'none';
  menuHamb.style.display = 'flex';
  menuX.style.display = 'none';
  menuMobileBg.style.display = 'none';
});
