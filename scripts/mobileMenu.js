const body = document.querySelector('body');
const menuHamb = document.querySelector('.menu-hamb');
const menuX = document.querySelector('.menu-x');
const menuMobileContainer = document.querySelector('.menu-mobile-container');
const menuMobileBg = document.querySelector('.menu-mobile-bg');
const portfolioBtn = document.querySelector('.portfolio-btn');
const aboutBtn = document.querySelector('.about-btn');
const contactBtn = document.querySelector('.contact-btn');
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

contactBtn.addEventListener('click', () => {
  body.style.height = 'auto';
  body.style.overflow = 'visible';
  menuMobileContainer.style.display = 'none';
  menuHamb.style.display = 'flex';
  menuX.style.display = 'none';
  menuMobileBg.style.display = 'none';
});
