let storedMousePosX, storedMousePosY, mousePosX, mousePosY;
let contactSection = document.getElementById('contact');

export class MeShadow{

  constructor(){};

  start(){
    contactSection.addEventListener('mousemove', (e) => {
      
      updateMouseCoords(e)
      window.requestAnimationFrame(moveEyes);

    });
  }
}

const eyeRight = document.getElementById('me-shadow__eye-dot-right');
const eyeLeftBg = document.getElementById('me-shadow__eye-left');
const eyeRightBg = document.getElementById('me-shadow__eye-right');
const eyeLeft = document.getElementById('me-shadow__eye-dot-left');

let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

let xPosEyes, yPosEyes, xPosEyesBg, yPosEyesBg;

let yPosMaxPercentage = 7;

let yPosBgMaxPercentage = 3;

let centerPos = getInitialPosition(document.querySelector('.contact__me'));

function moveEyes(){
  window.requestAnimationFrame(moveEyes);

  if (storedMousePosX === mousePosX && storedMousePosY === mousePosY) return;
  storedMousePosX = mousePosX;
  storedMousePosY = mousePosY;

  eyeLeft.setAttribute('style', `translate:${xPosEyes}% ${yPosEyes}%;`);
  eyeRight.setAttribute('style', `translate:${xPosEyes}% ${yPosEyes}%;`);
  eyeLeftBg.setAttribute('style', `translate:${xPosEyesBg}% ${yPosEyesBg}%;`);
  eyeRightBg.setAttribute('style', `translate:${xPosEyesBg}% ${yPosEyesBg}%;`);
}

function calcPercentage(partialValue, total, maxPercentage) {
  return maxPercentage * partialValue / total;
}

function getInitialPosition(parentEl){
  return parentEl.offsetLeft + parentEl.clientWidth/2;
}

function updateMouseCoords(e) {

  mousePosX = e.clientX;
  mousePosY = e.layerY;

  xPosEyes = 6 * (mousePosX - centerPos) / windowWidth;
  yPosEyes = calcPercentage(e.clientY, windowHeight, yPosMaxPercentage) - yPosMaxPercentage/2;
  xPosEyesBg = 2.5 * (mousePosX - centerPos) / windowWidth; 
  yPosEyesBg = calcPercentage(e.clientY, windowHeight, yPosBgMaxPercentage) - yPosBgMaxPercentage/2;
}