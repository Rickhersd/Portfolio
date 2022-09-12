const keyframesEffectsData = [
  {
    name: "OpenMenu",
    target: ".nav-mobile__list-item-container",
    keyframes: 
    [
      {clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'},
      {clipPath: 'polygon(100% 0, 30% 0, 40% 100%, 100% 100%)', offset: 0.6},
      {clipPath: 'polygon(100% 0, 0 0, 0 100%, 100% 100%)'},
    ],
    options: 
    {
      duration: 450, 
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: 'backwards',
    }
  },
  {
    name: "Outside",
    target: '.nav-mobile__outside',
    keyframes:
    [
      {opacity: 0},
      {opacity: 0.7},
    ],
    options:
    {
      duration: 450,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: 'both',
    }
  },
];

const keyframesEffects = keyframesEffectsData.map(
  (data) => new KeyframeEffect(document.querySelector(data.target), data.keyframes, data.options)
);

function toggleDisplay(hamburgerMenu, outsideArea) {
  hamburgerMenu.style.display = hamburgerMenu.style.display != "block" ? "block" : "none";
  outsideArea.style.display = outsideArea.style.display != "block" ? "block" : "none";
}

const animation = new Animation(keyframesEffects[0]);
const animationOutside = new Animation(keyframesEffects[1]);

export class HamburgerMenu{

  constructor(){
    this.hamburgerMenu = document.querySelector('.nav-mobile__list-item-container');
    this.hamburgerBtn = document.querySelector('.hamburger-button');
    this.outsideArea = document.querySelector('.nav-mobile__outside');
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
    if(animation.playState != 'running'){
      this.isDisplay = true;
      animation.playState != 'idle' ? animation.reverse() : animation.play(); 
      animationOutside.playState != 'idle' ? animationOutside.reverse() : animationOutside.play();
      toggleDisplay(this.hamburgerMenu, this.outsideArea);
      animation.finished
        .then(() => {
          this.hamburgerMenu.style.display = this.isDisplay == true ? 'block' : 'none'; 
          this.outsideArea.style.display = this.isDisplay == true ? 'block' : 'none';
        })
        .catch(error => console.log(error))
    } else if (toggable == true) {
      this.isDisplay = animation.playbackRate > 0 ? false : true;
      animation.reverse();
      animationOutside.reverse();
    }
  } 

  closeMenu(toggable = false){
    if(animation.playState != 'running'){
      this.isDisplay = false;
      animation.reverse();
      animationOutside.reverse();
      animation.finished
        .then(() => {
          this.hamburgerMenu.style.display = this.isDisplay == false ? 'none' : 'block';
          this.outsideArea.style.display = this.isDisplay == false ? 'none' : 'block';
        })
        .catch(error => console.log(error))
    } else if (toggable == true){
      this.isDisplay = animation.playbackRate > 0 ? false : true;
      animation.reverse();
      animationOutside.reverse();
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