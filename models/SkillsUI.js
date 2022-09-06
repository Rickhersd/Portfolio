export class SkillUI {
  constructor(){}

	renderSkills(skills){

		const URI = "http://www.w3.org/2000/svg";
		const container = document.querySelector('.skills__flex-container');
		const fragment = new DocumentFragment(); 

		for(const i in skills){

			let [id, width, height, svgElements, description] = [
				skills[i].id, 
				skills[i].width, 
				skills[i].height,
				skills[i].svgElements,
				skills[i].description
			]

			const svgContainer = document.createElement('div')
			svgContainer.classList.add('svg-icons')
			svgContainer.addEventListener(('click'), () => skillEvent(Object.values(svgElements)[0], id, description));

			const svgElement = createSvgContainer(id,width,height);
			const svgElements2 = createSvgElements(svgElements);

			svgElement.append(svgElements2[0]);
			console.log(svgElement);

			const text = document.createElement('h5')
			text.textContent = id;

			svgContainer.append(svgElement);
			svgContainer.append(text);
			fragment.append(svgContainer);
		}

		container.append(fragment);

		function createSvgContainer (titleName, svgWidth, svgHeight){
			let element = document.createElementNS(URI,'svg')
			element.setAttribute("role","img");
			element.setAttribute("title",`${titleName}-icon`);
			element.setAttribute("width", svgWidth);
			element.setAttribute("height", svgHeight);
			element.setAttribute("viewBox",`0 0 ${svgWidth} ${svgHeight}`);

			return element;
		}

		function createSvgElements (SvgElements){

			const values = Object.values(SvgElements);
			const typeElement = Object.keys(SvgElements);

			let elements = [];
			for (let i = 0; i < typeElement.length; i++){
				let path = document.createElementNS(URI,typeElement[i])
				path.setAttribute ('d', values[i])
				elements.push(path);
			}

			return elements;
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

			document.querySelector(".skills__flex-container").classList.toggle("skills__show");

			skillsContainer.classList.toggle("skills__show");
		}
	}	
}