export class Carrousel{
  #currentIndex = 0;
  #preIndex = 0;
  _buttomLeft;
  _buttomRight;
  _dots;
  
  constructor(items){
    this.items = items;
  }

  setBtnRight(element){
    this._buttomRight = element;
    element.addEventListener('click', () => {
      this.#moveCarrousel(1);
    });
  }

  setBtnLeft(element){
    this._buttomLeft = element;
    element.addEventListener('click', () => {
      this.#moveCarrousel(-1);
    });
  }

  setIndicators(elements){
    this.dots;  
  }

  #moveCarrousel(direction){
    this.#currentIndex = clamp(this.#currentIndex + direction, 0, this.items.length - 1)
    if (this.#currentIndex == this.#preIndex) return;
    this.#preIndex = this.#currentIndex;
    for(let i = 0; i < this.items.length; i++){
      console.log(`hola`)
      this.items[i].setAttribute('style', `left: ${110 * (i - this.#currentIndex)}%`)
    }
  };

}

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)