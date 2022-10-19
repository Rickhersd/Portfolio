let previousTouchY = 0;
const URI = "http://www.w3.org/2000/svg";

export class SkillUI {

  constructor(){}

	renderSkills(skills, container, centerCircle, direction = "clock"){

		const fragment = new DocumentFragment(); 
    const circleContainer = container;
    const skillsToShow = 12;
    const angle = -90;
    const parts = 360 / skillsToShow;
    const radian = toRadian(angle);
    const radio = circleContainer.clientWidth * 0.74;
    const deceleration = 0.10;
    const svgList = createSvgList(skills)
    const clockDirection = direction == "inverse" ? 1 : -1; 

    let plus = 0;

    drawSkills(svgList);

    circleContainer.onmouseover = () => window.addEventListener("wheel", preventDefault, {passive: false});
    circleContainer.onmouseout = () => window.removeEventListener("wheel", preventDefault, {passive: false});

    circleContainer.addEventListener("wheel", (e) => rotate(e), { passive: false })
    circleContainer.addEventListener("touchmove", (e) => {
      rotate(e);
      document.getElementsByTagName('body')[0].setAttribute('style', 'touch-action:none;')
    })
    circleContainer.addEventListener("touchend", () => {
      previousTouchY = 0
    })

		function createSvgElements (title, width, height, pathList){
			let element = document.createElementNS(URI,'svg')

			element.setAttribute("role","img");
			element.setAttribute("title",`${title}-icon`);
			element.setAttribute("width", width);
			element.setAttribute("height", height);
			element.setAttribute("viewBox",`0 0 ${width} ${height}`);

      element.append(createPathElements(pathList)[0])

			return element;
		}

		function createPathElements (pathList){

			const pathValue = Object.values(pathList);
			let elements = [];

			for (let i = 0; i < pathValue.length; i++){
        let path = document.createElementNS(URI,'path');
        path.setAttribute('d',pathValue);
				elements.push(path)
			};

			return elements;
		}

    function createSvgList(skills) {

      let svgList = [];

      for(const i in skills){

        let [id, width, height, pathList, description] = [
          skills[i].id, 
          skills[i].width, 
          skills[i].height,
          skills[i].svgElements,
          skills[i].description
        ]
  
        const svgContainer = document.createElement('div')
        svgContainer.classList.add('svg-icons')
        svgContainer.addEventListener(('click'), () => skillEvent(Object.values(pathList)[0], id, description));
  
        const svgElement = createSvgElements(id, width, height, pathList);
        const text = document.createElement('h5')
        text.textContent = id;
  
        svgContainer.append(svgElement);
        svgContainer.append(text);
  
        svgList.push(svgContainer);
      }

      return svgList;
    }

		function skillEvent (path, title, des){

			const skillsContainer = document.querySelector(".skills__description");

			const svgBigElement = skillsContainer.children[0].children[0];
			const h3Element = skillsContainer.children[1].children[0];
			const pElement = skillsContainer.children[1].children[1];
			console.log(path);
			svgBigElement.setAttribute("d",path);
			h3Element.innerHTML = title;
			pElement.innerHTML = des;
		}

    function drawSkills(skillsElements){

      for (let i = 0; i < skillsElements.length; i++){
        
        const pos = {
          x: centerCircle.x + Math.sin(radian + toRadian(i * parts)) * radio * clockDirection,
          y: centerCircle.y - Math.cos(radian + toRadian(i * parts)) * radio,
        }

        let actualAngle = (radian + toRadian(i * parts) - toRadian(plus)) * 180/Math.PI;
        let isDisplay = actualAngle < -235 || actualAngle > 235 ? "none" : "block";
    
        skillsElements[i].setAttribute("class", "skillElement"); 
        skillsElements[i].setAttribute("style", `top:${pos.y}px; left:${pos.x}px; display: ${isDisplay};`)
    
        fragment.append(skillsElements[i]);
      }

      circleContainer.append(fragment);

    }

    function rotate(e){
      if(e.type == 'wheel') plus += e.deltaY * deceleration;
      if(e.type == 'touchmove') plus += checkTouchScroll(e);
      

      if (plus > ((svgList.length * parts) - (12 * parts) + parts/2)){
        plus = (svgList.length * parts) - (12 * parts) + parts/2;
      } 
      if (plus < -72) plus = -72

      for (let i = 0; i < svgList.length; i++){

        let actualAngle = (radian + toRadian(i * parts) - toRadian(plus)) * 180/Math.PI;
        let isDisplay = actualAngle < -235 || actualAngle > 150 ? "none" : "block";

        const pos = {
            x: centerCircle.x + Math.sin(radian + toRadian(i * parts) - toRadian(plus)) * radio * clockDirection,
            y: centerCircle.y - Math.cos(radian + toRadian(i * parts) - toRadian(plus)) * radio,
        }

        svgList[i].setAttribute("style", `top:${pos.y}px; left:${pos.x}px; display: ${isDisplay};`)
      }
    }
	}	
}

function preventDefault(e) {
  e.preventDefault();
}

function toRadian(angle){
  return angle * Math.PI / 180;
}

function checkTouchScroll(e){
  let currentTouch = e.touches[0].clientY;
  let scrollDirection = 0;
  if (previousTouchY == 0) previousTouchY = currentTouch;
  if (previousTouchY != currentTouch) {
    scrollDirection = -(previousTouchY - currentTouch);
  }
  previousTouchY = currentTouch;
  console.log(scrollDirection)
  return scrollDirection;
}