import { skills } from "../data/skills.js";
import { SkillUI } from "../models/SkillsUI.js";
import { HamburgerMenu } from "../models/HamburgerMenu.js";
import { DarkMode } from "../models/DarkMode.js";
import { ParallaxController } from "../models/Parallax.js";
import { HeaderNav } from "../models/HeaderNav.js";
import { NavBar } from "../models/NavBar.js";
import { Header } from "../models/Headers.js";
import { AnimationWord } from "../models/AnimationWord.js";
import { Translater } from "../models/Translater.js";
import { MeShadow } from "../models/MeShadow.js";

const hamburgerMenuController = new HamburgerMenu();
hamburgerMenuController.setEvents();

const darkMode = new DarkMode();
darkMode.setBtn('.header__darkmode-btn');

const headerNavController = new HeaderNav();
headerNavController.addEvents();

const translater = new Translater();
let btn = document.documentElement.querySelector('.header__language-btn');
btn.addEventListener('click', () => {
  translater.translate('en');
});

const navBar = new NavBar();
navBar.setEvents();

const meShadow = new MeShadow();
meShadow.start();

const AnimationWordController = new AnimationWord();

let stringsElements = document.querySelectorAll('[data-animatedWord]');

for(let element of stringsElements){
    AnimationWordController.separate(element);
}

const aboutNodes = getHeaderNodes('about-me')
const skillsNodes = getHeaderNodes('skills')
const portfolioNodes = getHeaderNodes('portfolio')

const aboutHeader = new Header(aboutNodes.next().value, aboutNodes.next().value, [0.1, 0.2, 0.3, 0.4]);
const skillsHeader = new Header(skillsNodes.next().value, skillsNodes.next().value, [0.1, 0.4, 0.3, 0.2]);
const portfolioHeader = new Header(portfolioNodes.next().value, portfolioNodes.next().value, [0.4, 0.3, 0.2, 0.1]);
/*
aboutHeader.slide();
skillsHeader.slide();
portfolioHeader.slide();
*/
function* getHeaderNodes(sectionName){
    yield document.querySelector(`.${sectionName}__header`);
    yield document.querySelector(`.${sectionName}__header-content-container`);
}

window.onclick = (event) => {
    if (!event.target.matches('.dropdown')) {
        let el = document.getElementsByClassName("dropdown");
        for(let i = 0; i < el.length; i++){
            if (el[i].classList.contains("show")){
                el[i].classList.remove("show");
            }
        }
    }
    if (event.target.matches('.nav-mobile__outside')){
        hamburgerMenuController.closeMenu();
        hamburgerMenuController.toogleHamburgerBtn("close");
    }
}

function fieldEmpty(){
    document.querySelectorAll(".contact__form-field").forEach(element => {
        element.addEventListener("focus", e => e.target.parentElement.setAttribute("data-focused", true));
        element.addEventListener("focusout", e => e.target.parentElement.setAttribute("data-focused", e.target.value != "" ? true : false));
    });
}

fieldEmpty();

function main () {

    let actualClientHeight = document.documentElement.clientHeight;
    const btn = document.querySelector('.hamburger-button');

    btn.addEventListener('click', () => {
        hamburgerMenuController.toggleDisplayMenu();
        hamburgerMenuController.toogleHamburgerBtn();
    });


    const ui = new SkillUI();

    const frontendContainer = document.querySelector(".skills__frontend-radial");
    const backendContainer = document.querySelector(".skills__backend-radial");

    const centerCircleFrontend = {
        x: frontendContainer.clientWidth, 
        y: frontendContainer.clientHeight / 2
    }

    const centerCircleBackend = {
        x: 0, 
        y: backendContainer.clientHeight / 2
    }

    ui.renderSkills(skills, frontendContainer, centerCircleFrontend, "inverse");
    ui.renderSkills(skills, backendContainer, centerCircleBackend);

    window.addEventListener('resize', () => {
        actualClientHeight = calcClientHeight();
    });
    
    window.addEventListener('scroll', () => {

        navBar.checkScrollTop(actualClientHeight);
    });

}

main();

if(!!window.IntersectionObserver){
    
    let options = {
        root: null,
        rootMargin: '-100px',
        threshold: 0.1
    }

    let observer = new IntersectionObserver((entries, observer) => 
    {       
        entries.forEach((entry) => 
        {
            console.log(entry);

            if (entry.isIntersecting){ 
                entry.target.setAttribute('data-intersection', 'true');
                observer.unobserve(entry.target);
            };
        });
    }, options); 

    let elements = document.querySelectorAll(`[data-intersection]`);

    for (let element of elements){
        observer.observe(element);
    }
}



function preventDefault(e) {
    e.preventDefault();
  }

const blockElements = document.querySelectorAll(`[data-appearIndex]`);
appear();

function appear(){

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

        element.animate( keyframe, options);
    }
    
}

function calcClientHeight(){
    return document.documentElement.clientHeight 
}

//Encode Email address to base64 format
const emailAddress = 'cmlja2hlcnNkMjAwMkBnbWFpbC5jb20=';
const contactAnchor = document.getElementById('contact__email-address');
contactAnchor.setAttribute('href', `mailto:${atob(emailAddress)}`);

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

const scrollElement = document.querySelector(".header__scroll");
const scrollElementBg = document.querySelector(".header__scroll-bg");
const scrollElementCont = document.querySelector('.header__scroll-cont')
window.addEventListener("scroll", () => {
  const scrollElement = document.querySelector(".header__scroll");
  parallax();
})

function parallax(){
  let distance = 0.003 * Math.pow(window.scrollY, 2);
  scrollElementBg.setAttribute('style', `transform: scale(${clamp(0.9,1 + distance * 0.005,15)})`);
  scrollElementCont.setAttribute('style', `filter: opacity(${clamp(0, 100 - distance * 0.2, 100)}%)`)
}

function clamp (min, value, max){
  if (value > min && value < max) return value;
  return value < min ? min : max;
}

