import {skills} from "../data/skills.js";
import { SkillUI } from "../models/SkillsUI.js";
import '../models/Skills.js'


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
}

function main () {
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