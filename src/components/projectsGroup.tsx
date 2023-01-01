import React from 'react'
import ProjectCard from "./projectCard/projectCard";
import { projectsList } from '../data/projects';

import './projectCard.scss';

export default function ProjectsGroup() {
  return (
    <div className='project-group'>
      {
        projectsList.map((project, index) => (
          <ProjectCard
            key={index} 
            title={project.title} 
            urlPage={project.urlPage}
            description={project.description} 
            technologies={project.technologies}
          ></ProjectCard> 
        ))
      }
    </div>
  )
}
