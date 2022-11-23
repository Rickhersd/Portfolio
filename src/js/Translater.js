import spanishData from "../Languages/Spanish.json" assert { type:'json'}
import englishData from "../Languages/English.json" assert { type:'json'}
import { separate } from "./AnimationWord.js";

export class Translater{
    
  constructor (){
    this.textElements = getTextElements();
    this.currentLanguage = this.checkLocalStorage();
  }

  moveLangBtn(btns){
    if(this.currentLanguage == "es") return;
    btns.forEach(btn => {
      btn.classList.toggle('language-moved'); 
    });
  }

  toggleLang(firstLang, secondLang){
    let lang = (this.currentLanguage == firstLang) ? secondLang : firstLang;
    this.translate(lang);
    this.currentLanguage = lang;
  }

  translate(lang){
    let lngData = selectLanguageData(lang);
    changeHtmlang(lang);
    addLocalValue(lang);
  
    for(let element of this.textElements){
      let key = element.dataset.text;
      if(key != null) element.innerHTML = lngData[key];
      if(element.hasAttribute('data-animatedWord')) separate(element);
    }
  }  
  
  checkLocalStorage(){
    let currentLang;
    let localValue = localStorage.getItem('language');
    console.log(localValue)
    console.log(localValue == null)
    if (localValue == null) {
      currentLang = checkLangPreference();
      currentLang = normalizeLangCode(currentLang);
      addLocalValue(currentLang);
      if (currentLang != "es") this.translate(currentLang);
      console.log("hola");
    } else {
      currentLang = localValue;
      if (localValue != "es") this.translate(localValue);  
    } 
    return currentLang;
  }
}

function selectLanguageData(language){
  let data;
  switch(language) {
    case "es":
      data = spanishData;
      break;
    case "en":
      data = englishData;
      break;
  }
  return data;
}

function normalizeLangCode(langCode){
  return langCode.slice(0,2);
}

function addLocalValue(value){
  return localStorage.setItem('language', value);
};

function checkLangPreference(){
  return navigator.language;
};

function getTextElements(){
  return document.querySelectorAll('[data-text]');
}

function changeHtmlang(lang){
  const tag = document.getElementsByTagName('html')[0];
  return tag.setAttribute('lang', lang);
}