export class Skill {

  /**
   * 
   * @param {string} tecnology this is the tecnology
   * @param {number} width 
   * @param {number} height 
   * @param {string} id 
   * @param {string} description 
   */
  constructor(id, width, height, path, svgFill, description){
    this.id = id;
    this.width = width;
    this.height = height;
    this.path = path;
    this.svgFill = svgFill;
    this.description = description;
  }
}