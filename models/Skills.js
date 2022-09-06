export class Skill {

  /**
   * 
   * @param {string} tecnology this is the tecnology
   * @param {number} width 
   * @param {number} height 
   * @param {string} id 
   * @param {string} description 
   */
  constructor(id,width,height,svgElements,description){
    this.id = id;
    this.width = width;
    this.height = height;
    this.svgElements = svgElements;
    this.description = description;
  }

}