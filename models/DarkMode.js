export class DarkMode{

  constructor(){
    this.darkModeOn = false;
    this.darkModeElements = findElements();
    this.currentTheme = checkLocalStorage();
  }

  toggleDarkMode(){
    this.darkModeOn = !this.darkModeOn; 
    this.currentTheme = (this.darkModeOn == true) ? 'dark' : 'light';
    this.darkModeElements.forEach(e => e.setAttribute("data-darkmode", this.darkModeOn));
    changeLocalValue(this.currentTheme);
  }

  setBtn(btnElement){
    document.querySelector(btnElement).addEventListener('click', () => {
      this.toggleDarkMode();
    })
  }
}

function findElements(){
  return document.querySelectorAll("[data-darkmode]");
}

function checkLocalStorage(){
  let currentTheme = localStorage.getItem('theme');

  if(currentTheme == 'light' || currentTheme == 'dark'){
    return currentTheme;
  } else {
    let prefersTheme = checkThemePreference();  
    addLocalValue(prefersTheme);
    return prefersTheme;
  }
}

function changeLocalValue(theme){
  return localStorage.setItem('theme', theme);
}

function addLocalValue(value){
  return localStorage.setItem('theme', value )
};

function checkThemePreference(){
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  return prefersDarkScheme.matches ? 'dark' : 'light';
}