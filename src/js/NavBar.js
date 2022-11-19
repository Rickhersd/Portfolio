
let keyframes = [
  {translate: '0px -100px', opacty: 0},
  {translate: '0px 0px', opacity: 1}
]

export class NavBar{

  constructor (){
    this.nav = document.querySelector('.nav__container');
    this.headerStyle = window.getComputedStyle(document.getElementById("home"));
    this.onDisplay = false;  
    this.spanElement = document.querySelector('.nav__span');
    this.liElements = document.querySelectorAll('.nav__list-item');
    this.listContainer = document.querySelector('.nav__list-container');
    this.arrowBtn = document.querySelector('.nav__btn-arrow');
  }

  checkScrollTop(actualClientHeight){
    let winScroll =  document.documentElement.scrollTop;

    if(this.onDisplay == false && winScroll > this.calcScrollTigger(actualClientHeight)){
      this.show();
    }
    
    if(this.onDisplay == true && winScroll < this.calcScrollTigger(actualClientHeight)){
      this.hide();
    }
  }

  show(){
    this.onDisplay = true;
    this.nav.classList.add('nav__show');
    this.showAnimate();
  }

  hide(){
    this.onDisplay = false;
    this.nav.classList.remove('nav__show');
    this.hideAnimate();
  } 

  calcScrollTigger(actualClientHeight){
   return actualClientHeight + parseInt(this.headerStyle.marginBottom.replace("px", ""))
  }

  setEvents(){
    let liWidth = this.liElements[0].clientWidth;

    for(let i = 0; i < this.liElements.length; i++){
      this.liElements[i].addEventListener('mouseenter', () => this.moveSpan(liWidth * i))
    }

    this.arrowBtn.addEventListener('click', () => {
      this.listContainer.classList.toggle("nav__list-hidden");
    })
  }

  moveSpan(xtranslate){
    this.spanElement.setAttribute('style', `translate: ${xtranslate}px 0px`)
  }

  showAnimate(){

    for(let i = 0; i < this.liElements.length; i++){

      let options = {
        duration: 300,
        delay: 50 * (i + 1),
        easing: 'ease',
        fill: 'forwards',
      }

      this.liElements[this.liElements.length - (i + 1)].animate(keyframes, options);
    }
  }

  hideAnimate(){

    for(let i = 0; i < this.liElements.length; i++){

      let options = {
        duration: 100,
        delay: 25 * (i + 1),
        easing: 'ease',
        fill: 'forwards',
        direction: 'reverse',
      }

      this.liElements[i].animate(keyframes, options);
    }
  }
}