import { frontendSkills } from "../data/skills.js";
import { backendSkills } from "../data/skills.js";

import { SkillUI } from "../models/SkillsUI.js";
import { HamburgerMenu } from "../models/HamburgerMenu.js";
import { DarkMode } from "../models/DarkMode.js";
import { ParallaxController } from "../models/Parallax.js";
import { HeaderNav } from "../models/HeaderNav.js";
import { NavBar } from "../models/NavBar.js";
import { Header } from "../models/Headers.js";
import { separate } from "../models/AnimationWord.js";
import { Translater } from "../models/Translater.js";
import { MeShadow } from "../models/MeShadow.js";
import { Carrousel } from "../models/Carrousel.js";


window.addEventListener('DOMContentLoaded', (e) =>{
  initLoading();
})

window.addEventListener('load', (event) => {
  const loadingEl = document.querySelector('.loading');
  const loadingText = document.querySelector('.loading__text')
  const loadingCont = document.querySelector('.loading__container')
  loadingText.innerHTML = "Iniciando Porfolio"
  setTimeout(() => {
    loadingCont.style.animationPlayState = 'running'
    setTimeout(() =>{
      loadingEl.style.display = 'none';
      initPage();
    }, 500) 

  }, 2000)
});

const hamburgerMenuController = new HamburgerMenu();
hamburgerMenuController.setEvents();

const darkMode = new DarkMode();
darkMode.setBtn('.header__darkmode-btn');
darkMode.setBtn('.nav-mobile__darkmode-btn')

const translater = new Translater();
let btn = document.documentElement.querySelector('.header__language-btn');
btn.addEventListener('click', () => {
  translater.toggleLang('en','es');
  btn.classList.toggle('header__language-moved');
});

const navBar = new NavBar();
//navBar.setEvents();

const meShadow = new MeShadow();
meShadow.start();

let stringsElements = document.querySelectorAll('[data-animatedWord]');

for(let element of stringsElements){
    separate(element);
}

const carrosuelItems = document.getElementsByClassName('about-me__hobby')
const carrousel = new Carrousel(carrosuelItems);

carrousel.setBtnLeft(document.querySelector('.about-me__hobbies-leftBtn'));
carrousel.setBtnRight(document.querySelector('.about-me__hobbies-rightBtn'));


function fieldEmpty(){
  document.querySelectorAll(".contact__form-field").forEach(element => {
    element.addEventListener("focus", e => e.target.parentElement.setAttribute("data-focused", true));
    element.addEventListener("focusout", e => e.target.parentElement.setAttribute("data-focused", e.target.value != "" ? true : false));
  });
}

fieldEmpty();

function initLoading(){
  (() => {
    const href = location.href;
    if (href.includes('#')){
      const strToReplace = href.substring(href.indexOf('#'), href.length);
      const newHref = href.replace(strToReplace, ""); 
      location.replace(newHref);
    }    
  })()
}

function initPage() {

  let actualClientHeight = document.documentElement.clientHeight;
  const btn = document.querySelector('.hamburger-button');

  btn.addEventListener('click', () => {
    hamburgerMenuController.toggleDisplayMenu();
    hamburgerMenuController.toogleHamburgerBtn();
  });

    window.addEventListener('resize', () => {
      actualClientHeight = calcClientHeight();
    });
    
  window.addEventListener('scroll', () => {
    navBar.checkScrollTop(actualClientHeight);
  });

  showHeroAnimations();
  initIntersectionObserver();
  configWheelSkills();
  decodeEmail();
}

function configWheelSkills(){

  const uiWheel = new SkillUI();
  const frontendContainer = document.querySelector(".skills__frontend-radial");
  const backendContainer = document.querySelector(".skills__backend-radial");

  const options = {
    maxWidth: 800,
    radio: 150,
    skillsToShow: 6,
    right: {x: 250, y: 250},
    left: {x: 0, y:  250}
  }

  const options2 = {
    maxWidth: 2000,
    radio: 260,
    skillsToShow: 10,
    right: {x: 350, y: 350},
    left: {x: 0, y: 350}
  }

  uiWheel.renderSkills(frontendSkills, frontendContainer, 'right', "inverse", options2, options);
  uiWheel.renderSkills(backendSkills, backendContainer, 'left', "clock", options2, options);
}

function initIntersectionObserver(){
  if(!window.IntersectionObserver) return;
   
  const targets = document.querySelectorAll(`[data-intersection]`); 
  const options = {
    root: null,
    rootMargin: '-100px',
    threshold: 0.1
  }

  const observer = new IntersectionObserver((entries, observer) => {       
    entries.forEach((entry) => {
      if (entry.isIntersecting){ 
        entry.target.setAttribute('data-intersection', 'true');
        observer.unobserve(entry.target);
      };
    });
  }, options); 

  targets.forEach((target) => {
    observer.observe(target)
  });
}

function preventDefault(e) {
  e.preventDefault();
}

function showHeroAnimations(){

  const meSvg = document.querySelector('.me__paused');
  meSvg.classList.remove('me__paused');

  const blockElements = document.querySelectorAll(`[data-appearIndex]`);
  for (let element of blockElements){

    element.style.scale = '0.7';
    element.style.opacity = "0";

    let keyframe = 
    [
      {opacity: 0.7},
      {opacity: 1, scale: 1}
    ]

    let delay = 80 * parseInt(element.dataset.appearindex);

    let options = {
      delay: delay,
      duration: 2500,
      fill: 'forwards',
      easing: 'cubic-bezier(.18,1.63,.21,.94)'
    }

    element.animate(keyframe, options);
  }
}

function calcClientHeight(){
    return document.documentElement.clientHeight 
}

//Decode Email address from base64 format;
function decodeEmail(){
  const emailAddress = 'cmlja2hlcnNkMjAwMkBnbWFpbC5jb20=';
  const contactAnchor = document.getElementById('contact__email-address');
  contactAnchor.setAttribute('href', `mailto:${atob(emailAddress)}`);
}

//send FormData to sendEmial.php
let form = document.querySelector('.contact__form');

function formFetchPost (){

  let formData = new FormData(form);

  fetch('http://127.0.0.1:8080/MyPage/sendEmail.php', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.text())
  .then(result => {
    showModalResponse(checkResponse(result), result);
  })
  .catch(error => {
    console.error('Error:', error)
  });
}

form.addEventListener('submit', (e) =>{
  e.preventDefault();
  formFetchPost();
});

function checkResponse(response){
  if (response == "Email sent successfully :)") return true;
  if (response == "Oops! The Email couldn't be sent :(") return false
}

function showModalResponse(successful, response){

  let modal = document.querySelector('.contact__modal');
  let modalSvg = document.querySelector('.contact__modal-svg');
  let modalResponse = document.querySelector('.contact__modal-response');


  modal.classList.add('show-modal');
  modalSvg.setAttribute('data-successful', successful);
  modalResponse.textContent = response;

  setTimeout(() => hideModalResponse(), 5000)
}

function hideModalResponse(){
  console.log('termino el modal')
}

