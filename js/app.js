import {skills} from "../data/skills.js";
import { SkillUI } from "../models/SkillsUI.js";
import { HamburgerMenu } from "../models/HamburgerMenu.js";
import { DarkModeController } from "../models/DarkMode.js";
import '../models/Skills.js'

const hamburgerMenuController = new HamburgerMenu();
hamburgerMenuController.setEvents();

const darkModeController = new DarkModeController();
darkModeController.hola();


function btnDropdown () {
    document.getElementById("nav__btn-dropdown").classList.toggle("show");
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
    document.querySelectorAll(".contact__form-field").forEach(element => element.addEventListener("change", (e) => {
        e.target.setAttribute("data-empty", e.target.value != "" ? false : true);
    }));
}

fieldEmpty();

function main () {


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

}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.documentElement.scrollTop;

  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

main();
/*
if(!!window.IntersectionObserver){
    
    let options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    }

    let observer = new IntersectionObserver((entries, observer) => 
    {       
        entries.forEach((entry) => 
        {
            if (entry.isIntersecting){ 
                console.log(entry);
                entry.target.classList.add("extra");
                observer.unobserve(entry.target);
            };
        });
    }, options); 

    let boxElement = document.querySelector(".block");
    observer.observe(boxElement);
}*/


const dots = [];

let plus = 0;



function toRadian(angle){
    return angle * Math.PI / 180;
}

function drawDots(){

    plus += 1;
    console.log(plus);


    for (let i = 0; i < numberDots; i++){
        const pos = {
            x: center.x + Math.sin(radian + toRadian(i * parts)) * radio,
            y: center.y - Math.cos(radian + toRadian(i * parts)) * radio,
        }

        let dot = document.createElement("div");
        dot.setAttribute("class", "dot"); 
        dot.setAttribute("style", `top:${pos.y}px; left:${pos.x}px`)

        dots.push(dot);
        container.append(dot);
    }

    console.log(dots);
}




function preventDefault(e) {
    e.preventDefault();
  }
  

let isDisplay = "block";  
const parallaxElements = document.querySelectorAll(`[data-parallax]`);



window.addEventListener('scroll', () => parallax(0.05))

function parallax(speed){

    for (let parallaxElement of parallaxElements){

        let posY = Math.pow(parallaxElement.dataset.parallax * (window.pageYOffset * speed), 2) + window.pageYOffset * speed
        parallaxElement.setAttribute('style', `translate: 0px ${-posY}px`)
    }
    
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
            duration: 1000,
            fill: 'forwards',
            easing: 'cubic-bezier(.37,1.69,.61,1)'
        }

        element.animate( keyframe, options);
    }
    
}


let languageBtn = document.getElementById('language-btn');
let frontSize = document.querySelector('.rotable-div__frontside');
let backSize = document.querySelector('.rotable-div__backside');

let keyframeRotate = [
    {transform: "rotateY(0deg)", zIndex: 0, offset: 0},
    {transform: "rotateY(180deg)", zIndex: -1, offset: 1}
]

let keyframeRotate2 = [
    {transform: "rotateY(180deg)", zIndex: -1, offset: 0},
    {transform: "rotateY(0deg)", zIndex: 0, offset: 1}
]

let optionsrotate = {
    easing: "ease",
    duration: 1500,
    fill: 'forwards'
}

languageBtn.addEventListener('click', () => animacion())

function animacion(){
    frontSize.animate(keyframeRotate, optionsrotate);
    backSize.animate(keyframeRotate2, optionsrotate)
}
