export default class Project {

  title:string;
  description:string;
  technologies:string;
  urlPage: string;
  
  constructor (title:string, description:string, technologies:string, urlPage:string ){
    this.title = title;
    this.description = description;
    this.technologies = technologies;
    this.urlPage = urlPage;
  }
}