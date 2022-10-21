import spanishData from "../Languages/Spanish.json" assert { type:'json'}
import englishData from "../Languages/English.json" assert { type:'json'}
import { separate } from "./AnimationWord.js";

export class Translater{
    
  constructor (){
    this.textElements = getTextElements();
    this.currentLanguage = this.checkLocalStorage();
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
    if (localValue == null) {
      currentLang = checkLangPreference();
      currentLang = normalizeLangCode(currentLang);
      addLocalValue(currentLang);
      if (currentLang != "en") this.translate(currentLang);
    } else {
      localValue != "en" ? this.translate(localValue): currentLang = localValue; 
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