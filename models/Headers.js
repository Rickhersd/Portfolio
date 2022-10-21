export class Header{
    
    constructor (headerParent, originalHeader, dataParallax = []){
        this.headerParent = headerParent;
        this.originalHeader = originalHeader;
        this.dataParallax = dataParallax;
    }

    slide(){
        const fragment = new DocumentFragment();

        for(let i = 0; i < this.dataParallax.length; i++){
            
            let newPart = this.originalHeader.cloneNode(true);
            newPart.classList.add(`part-${(i + 1)}`)
            newPart.setAttribute('data-parallaxHeader', this.dataParallax[i])

            fragment.append(newPart)
        }

        this.originalHeader.remove();
        this.headerParent.append(fragment);
    }
}