const keyframes = [
  {clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'},
  {clipPath: 'polygon(100% 0, 30% 0, 40% 100%, 100% 100%)', offset: 0.6},
  {clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)'},
]
const options = {
  duration: 450, 
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  fill: 'backwards',
}
const target = document.querySelector(".nav-mobile__list-item-container")

function toggleDisplay(hamburgerMenu) {
  hamburgerMenu.style.display = hamburgerMenu.style.display != "block" ? "block" : "none";
}


export class HamburgerMenu{

  #animation = new Animation(new KeyframeEffect(target, keyframes, options));
  #isDisplayBtn = false;

  constructor(){
    this.hamburgerMenu = document.querySelector('.nav-mobile__list-item-container');
    this.hamburgerBtn = document.querySelector('.hamburger-button');
    this.isDisplay = false;
  }

  setEvents(){
    const buttons = document.querySelector('.nav-mobile__nav-list');
    for (const btn of buttons.children){
      btn.addEventListener('click', () => {
        this.closeMenu();
        this.toogleHamburgerBtn('close');
      });
    }
  }

  toggleDisplayMenu(){
    if (this.isDisplay == false){
      this.openMenu(true);
    } else {
      this.closeMenu(true);
    }
  }

  openMenu(toggable = false){
    if(this.#animation.playState != 'running'){
      this.isDisplay = true;
      this.#animation.playState != 'idle' ? this.#animation.reverse() : this.#animation.play();
      toggleDisplay(this.hamburgerMenu);
      this.#animation.finished
        .then(() => {
          this.hamburgerMenu.style.display = this.isDisplay == true ? 'block' : 'none'; 
        })
        .catch(error => console.log(error))
    } else if (toggable == true) {
      this.isDisplay = this.#animation.playbackRate > 0 ? false : true;
      this.#animation.reverse();
    }
  } 

  closeMenu(toggable = false){
    if(this.#animation.playState != 'running'){
      this.isDisplay = false;
      this.#animation.reverse();
      this.#animation.finished
        .then(() => {
          this.hamburgerMenu.style.display = this.isDisplay == false ? 'none' : 'block';

        })
        .catch(error => console.log(error))
    } else if (toggable == true){
      this.isDisplay = this.#animation.playbackRate > 0 ? false : true;
      this.#animation.reverse();
    }
  }

  toogleHamburgerBtn(action = "toggle"){  
    if (action == 'toggle'){
      this.hamburgerBtn.classList.toggle('hamburger-button__close');
    } else if (action == "close" && this.hamburgerBtn.classList.contains("hamburger-button__close")){
      this.hamburgerBtn.classList.remove('hamburger-button__close');
    }
  }
}

const addPreventDefault = () => window.addEventListener("wheel", preventDefault, {passive: false});
const removePreventDefault= () => window.removeEventListener("wheel", preventDefault, {passive: false});

function preventDefault(e) {
  e.preventDefault();
}

