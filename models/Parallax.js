export class ParallaxController{

  constructor(){
    this.speed = 0.05;
    this.parallaxElementsHero = document.querySelectorAll(`[data-parallaxHero]`);
    this.parallaxElements = document.querySelectorAll(`[data-parallax]`);
    this.clientHeight = document.documentElement.clientHeight;
  }

  parallax(){
    let posY;
    let winScroll = document.documentElement.scrollTop;
    
    for (let element of this.parallaxElements){

      let curveWidth = element.dataset.parallax;
      let distance = (winScroll + this.clientHeight - 100) - element.offsetTop;

      if (distance > 0){
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
}