// main.js

function loadJS(url) {
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}

loadJS('scripts/mobileMenu.js');
loadJS('scripts/dynamicCards.js');
