function loadJS(url) {
  const script = document.createElement('script');
  script.src = url;
  script.async = true;
  document.body.appendChild(script);
}

// loadJS('scripts/jtScript.js');
// loadJS('scripts/mobileMenu.js');
loadJS('scripts/dynamicCards.js');
loadJS('scripts/popup.js');

// Email validation

const form = document.querySelector('#contact-form');
const email = document.querySelector('#mail');
const invalid = document.querySelector('#invalid');

form.addEventListener('submit', (e) => {
  const Emailtext = email.value;
  if (Emailtext !== Emailtext.toLowerCase()) {
    e.preventDefault();
    invalid.style.color = 'red';
    invalid.style.gridColumn = '2/3';
    invalid.textContent = 'Please Enter your Email in Lowercase';
  } else {
    invalid.textContent = '';
  }
});

// Preserve data in the browser

const saveUserData = {};

function userDataSet(info) {
  const userChar = JSON.stringify(info);
  window.localStorage.setItem('formData', userChar);
}

document.querySelector('.form').addEventListener('change', () => {
  const userData = document.querySelectorAll('input');
  const textInput = document.querySelector('textarea');
  userData.forEach((userInput) => {
    saveUserData[userInput.id] = userInput.value;
  });
  saveUserData[textInput.id] = textInput.value;
  userDataSet(saveUserData);
});

function restoreData(saveUserData) {
  Object.entries(saveUserData).forEach((formElement) => {
    const [key, value] = formElement;
    document.getElementById(key).value = value;
  });
}

window.addEventListener('load', () => {
  const userObject = JSON.parse(window.localStorage.getItem('formData'));
  if (userObject) {
    restoreData(userObject);
  }
});
