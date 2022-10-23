const directions = new Map([
  ["clock", -1],
  ["inverse", 1],
])

const URI = "http://www.w3.org/2000/svg";

//DescriptionElements
const desName = document.getElementById("skills__des-name");
const desParagraph = document.getElementById("skills__des-paragraph");
const desPath = document.getElementById("skills__des-path");

export class SkillUI {

	renderSkills(skills, container, side, direction, ...options){

		const fragment = new DocumentFragment();
    const svgList = createSvgList(skills) 
    const circleContainer = container;
    const angle = -90
    const radian = toRadian(angle);

    let parts;
    let radio;
    let fractionWidth;
    let centerCircle = calcCenterCircle(side);
    const deceleration = 0.10;
    const clockDirection = directions.get(direction); 

    let maxRotable, minRotable;

    let plus = 0;
    let previousTouchY = 0;

    changeParamaeters(selectOptions(options), side);

    drawSkills(svgList);

    circleContainer.onmouseover = () => window.addEventListener("wheel", preventDefault, {passive: false});
    circleContainer.onmouseout = () => window.removeEventListener("wheel", preventDefault, {passive: false});

    circleContainer.addEventListener("wheel", (e) => rotate(e), { passive: false })
    circleContainer.addEventListener("touchmove", (e) => {preventDefault(e); rotate(e);}, { passive: false})
    circleContainer.addEventListener("touchend", (e) => {previousTouchY = 0;})

    window.addEventListener('resize', () => {
      changeParamaeters(selectOptions(options), side);
      rotate();
    });

		function createSvgElement(name, width, height, path){
			let element = document.createElementNS(URI,'svg')
			element.setAttribute("role","img");
			element.setAttribute("title",`${name}-icon`);
			element.setAttribute("width", width);
			element.setAttribute("height", height);
			element.setAttribute("viewBox",`0 0 ${width} ${height}`);

      let pathElement = document.createElementNS(URI, 'path');
      pathElement.setAttribute('d', path);

      element.append(pathElement);

			return element;
		}

    function createSvgList(skills) {

      let svgList = [];

      for(const skill of skills){

        let [name, width, height, path, fill, description] = [
          skill.id, 
          skill.width, 
          skill.height,
          skill.path,
          skill.svgFill,
          skill.description
        ]
        const svgContainer = document.createElement('div');

        svgContainer.addEventListener('click', () => changeSkillInfo(name, description, path, fill));
        svgContainer.append(createSvgElement(name, width, height, path));

        const text = document.createElement('h5')
        text.textContent = name;
  
        svgContainer.append(text);
  
        svgList.push(svgContainer);
      }

      return svgList;
    }

		function changeSkillInfo(name, description, path, fill){
			desName.innerHTML = name;
      desParagraph.innerHTML = description;
      desPath.setAttribute("d", path);
      desPath.setAttribute("fill", fill);
		}

    function drawSkills(skillsElements){

      for (let i = 0; i < skillsElements.length; i++){

        let isDisplay = checkDisplay(parts[i]);
        let pos = calcPosition(parts[i]); 
    
        skillsElements[i].setAttribute("class", "skillElement"); 
        skillsElements[i].setAttribute("style", `top:${pos.y}px; left:${pos.x}px; display: ${isDisplay};`)
    
        fragment.append(skillsElements[i]);
      }
      circleContainer.append(fragment);
    }

    function rotate(e){
      
      if (e != undefined){
        if(e.type == 'wheel') plus += e.deltaY * deceleration;
        if(e.type == 'touchmove') plus += checkTouchScroll(e);
      }

      plus = clamp(plus, minRotable, maxRotable);
      
      for (let i = 0; i < svgList.length; i++){
        let isDisplay = checkDisplay(parts[i]);
        let pos = calcPosition(parts[i]);

        svgList[i].setAttribute("style", `top:${pos.y}px; left:${pos.x}px; display: ${isDisplay};`)
      }
    }

    function calcPosition(fraction){
      return {
        x: centerCircle.x + Math.sin(radian + toRadian(fraction) - toRadian(plus)) * radio * clockDirection,
        y: centerCircle.y - Math.cos(radian + toRadian(fraction) - toRadian(plus)) * radio,
      }
    }

    function checkDisplay(fraction){
      let actualAngle = (radian + toRadian(fraction) - toRadian(plus)) * 180/Math.PI;
      return actualAngle < -235 || actualAngle > 150 ? "none" : "block";
    }
    
    function checkTouchScroll(e){

      let currentTouch = e.touches[0].clientY;
      let scrollDirection = 0;

      if (previousTouchY == 0) previousTouchY = currentTouch;
      if (previousTouchY != currentTouch) scrollDirection = -(previousTouchY - currentTouch);

      previousTouchY = currentTouch;
      return scrollDirection / 2;
    }

    function selectOptions(options){
      const windowWidth = document.documentElement.clientWidth;
      let selectedOption;
      for (const option of options){
        if  (windowWidth < option.maxWidth) selectedOption = option;
      }
      return selectedOption;
    }

    function calcCenterCircle(option, side){
      switch (side){
        case "right":
          return option.right;
        case "left":
          return option.left;
      } 
    }

    function changeParamaeters(option, side){
      radio = option.radio;
      parts = [];
      fractionWidth =  360 / option.skillsToShow;

      let minMaxRotable = calcMinMaxRotable();
      minRotable = minMaxRotable.next().value;
      maxRotable = minMaxRotable.next().value;
      
      for (let i = 0; i < svgList.length; i++){
        parts.push(i * fractionWidth);
      }  
      centerCircle = calcCenterCircle(option, side);
    }

    function* calcMinMaxRotable(){
      yield angle + fractionWidth/2;
      yield svgList.length * fractionWidth + angle - fractionWidth/2;
    }
	}
}

function clamp(num, min, max){
  return Math.min(Math.max(num, min), max);
}

function preventDefault(e) {
 if (e.cancelable) return e.preventDefault();
}

function toRadian(angle){
  return angle * Math.PI / 180;
}