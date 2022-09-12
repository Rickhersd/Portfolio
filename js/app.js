import {skills} from "../data/skills.js";
import { SkillUI } from "../models/SkillsUI.js";
import { HamburgerMenu } from "../models/HamburgerMenu.js";
import '../models/Skills.js'

const hamburgerMenuController = new HamburgerMenu();
hamburgerMenuController.setEvents();

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
    ui.renderSkills(skills);
    const but = document.querySelector(".skills__back-button");
    console.log(but);
    but.addEventListener('click', () => {
        console.log(skills);
        document.querySelector(".skills__flex-container").classList.toggle("skills__show");
        document.querySelector(".skills__description").classList.toggle("skills__show");
    });
}

main();

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
}