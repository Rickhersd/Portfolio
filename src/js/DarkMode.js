export class DarkMode{

  constructor(){
    this.darkModeOn = false;
    this.darkModeElements = findElements();
    this.currentTheme = this.#checkLocalStorage();
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

  #checkLocalStorage(){
    let currentTheme = localStorage.getItem('theme');
  
    if(currentTheme != null){
      if (currentTheme == 'dark') this.toggleDarkMode();
      return currentTheme;
    } else {
      let prefersTheme = checkThemePreference();  
      addLocalValue(prefersTheme);
      return prefersTheme;
    }
  }
}

function findElements(){
  return document.querySelectorAll("[data-darkmode]");
}

function changeLocalValue(theme){
  return localStorage.setItem('theme', theme);
}

function addLocalValue(value){
  return localStorage.setItem('theme', value )
};

function checkThemePreference(){
  if (window.matchMedia == false) return 'light';
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  return prefersDarkScheme.matches ? 'dark' : 'light';
}