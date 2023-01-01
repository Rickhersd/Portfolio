import Project from "../models/project";
import proyectsData from "./projectsData";

export const projectsList = proyectsData.map(
  (project) => new Project(project.title, project.description, project.technologies, project.urlPage)
);