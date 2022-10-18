export class ParallaxController{

  constructor(){
    this.speed = 0.05;
    this.parallaxElementsHero = document.querySelectorAll(`[data-parallaxHero]`);
    this.parallaxElements = document.querySelectorAll(`[data-parallax]`);
    this.parallaxElementsHeader = document.querySelectorAll(`[data-parallaxHeader]`)
    this.clientHeight = document.documentElement.clientHeight;
  }

  parallax(){
    let posY;
    let winScroll = document.documentElement.scrollTop;
    
    for (let element of this.parallaxElements){

      let curveWidth = element.dataset.parallax;
      let distance = (winScroll + this.clientHeight - 100) - element.offsetTop;

      if (distance > 0 && distance < this.clientHeight){
          posY = curveWidth * Math.pow(distance * this.speed, 2) + distance * this.speed;
          element.setAttribute('style', `translate: 0px ${-posY}px;`)
      } 
    } 
  }

  parallaxHero(){
    let posY;
    let winScroll = document.documentElement.scrollTop;

    for (let element of this.parallaxElementsHero){
      let curveWidth = element.dataset.parallaxhero;
      posY = curveWidth * Math.pow((winScroll * this.speed), 2) + winScroll * this.speed;

      element.setAttribute('style', `translate: 0px ${-posY}px;`);
    }
  }

  parallaxHeader(){
    let posY;
    let winScroll = document.documentElement.scrollTop;

    for (let element of this.parallaxElementsHeader){

      let curveWidth = element.dataset.parallaxheader;
      let distance = (winScroll + this.clientHeight/4) - element.offsetParent.offsetTop;

      if (distance > 0 && distance < this.clientHeight/1.5){
          posY = curveWidth * Math.pow(distance * this.speed, 2) + distance * this.speed;
          element.setAttribute('style', `translate: 0px ${-posY}px;`)
      } 
    } 
  }
}