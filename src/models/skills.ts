export default class SkillClass {

  name:string;
  width:number;
  height:number;
  path:string;
  svgFill:string;
  description:string;

  constructor(name:string, width:number, height:number, path:string, svgFill:string, description:string){
    this.name = name;
    this.width = width;
    this.height = height;
    this.path = path;
    this.svgFill = svgFill;
    this.description = description;
  }
}