export class NavBar{

  constructor (){
    this.onDisplay = false;  
    this.navbar = document.getElementById('nav');
  }

  checkScrollTop(actualClientHeight){
    let winScroll = document.documentElement.scrollTop;

    if(this.onDisplay == false && winScroll > this.calcScrollTrigger(actualClientHeight)){
      this.show();
    }
    
    if(this.onDisplay == true && winScroll < this.calcScrollTrigger(actualClientHeight)){
      this.hide();
    }
  }

  show(){
    this.onDisplay = true;
    this.navbar.classList.add('nav__show');
  }

  hide(){
    this.onDisplay = false;
    this.navbar.classList.remove('nav__show');
  } 

  calcScrollTrigger(actualClientHeight){
    const headerStyle = window.getComputedStyle(document.getElementById("home"));
    return actualClientHeight + parseInt(headerStyle.marginBottom.replace("px", ""))
  }

  setSpan(){
    const liElements = document.querySelectorAll('.nav__list-item');
    const liWidth = liElements[0].clientWidth;
    const spanEl = document.querySelector('.nav__span');

    for(let i = 0; i < liElements.length; i++){
      liElements[i].addEventListener('mouseenter', () => {
        spanEl.setAttribute('style', `translate: ${liWidth * i}px 0px`)
      })
    }
  }
}