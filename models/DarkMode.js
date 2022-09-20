const URI = "http://www.w3.org/2000/svg";

export class DarkModeController{


    
    constructor(){
        this.on = false;
        this.darkModeBtn = document.querySelector(".svg-darkmode"); 
        this.svgSunMoon = document.querySelector(".svg-darkmode__sunMoon");
        this.svgGroupElement = document.querySelector(".svg-darkmode__group");
    }

    hola (){
        this.darkModeBtn.addEventListener('click', () => {
            this.on = !this.on;

            this.svgSunMoon.setAttribute("darkmode", this.on);
            this.svgGroupElement.setAttribute("darkmode", this.on);

        }) 
    }

}