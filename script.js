// https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

const toggleSwitch = document.querySelector('input[type="checkbox"]');

const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function toggleDarkLightMode(isLight) {
  isLight = isLight === 'dark' ? false : true;
  nav.style.backgroundColor = isLight
    ? 'rgba(255 255 255 / 50%)'
    : 'rgba(0 0 0 / 50%)';
  textBox.style.backgroundColor = isLight
    ? 'rgba(0 0 0 / 50%)'
    : 'rgba(255 255 255 / 50%)';
  toggleIcon.children[0].textContent = isLight ? 'Light Mode' : 'Dark Mode';
  isLight
    ? toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    : toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
  isLight ? imageMode('light') : imageMode('dark');
}

// Dark or light Images
function imageMode(color) {
  image1.src = `img/undraw_proud_coder_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}

// // Dark Mode Styles
// function darkMode() {
//   nav.style.backgroundColor = 'rgba(0 0 0 / 50%)';
//   textBox.style.backgroundColor = 'rgba(255 255 255 / 50%)';
//   toggleIcon.children[0].textContent = 'Dark Mode';
//   toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
//   imageMode('dark');
// }

// // Light Mode Styles
// function lightMode() {
//   nav.style.backgroundColor = 'rgba(255 255 255 / 50%)';
//   textBox.style.backgroundColor = 'rgba(0 0 0 / 50%)';
//   toggleIcon.children[0].textContent = 'Light Mode';
//   toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
//   imageMode('light');
// }

// Stwich Theme Dynamically
function switchTheme(event) {
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    // darkMode();
    toggleDarkLightMode('dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    // lightMode();
    toggleDarkLightMode('light');
  }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme');
// if (currentTheme) {
//   document.documentElement.setAttribute('data-theme', currentTheme);

//   if (currentTheme === 'dark') {
//     toggleSwitch.checked = true;
//     darkMode();
//   }
// }

// szerintem:
if (currentTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', currentTheme);
  toggleSwitch.checked = true;
  toggleDarkLightMode('dark');
}
