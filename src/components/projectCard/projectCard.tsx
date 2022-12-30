import React from 'react';

import GithubIcon from '../../images/github.svg'

interface ProjectCardInterface {
  title: string;
  description: string;
  technologies: string;
}

function ProjectCard( {title, description, technologies}:ProjectCardInterface) {


  return (
    <div className="project-card" data-intersection="false">
      <img src='' className='project-card__img' alt='Proyect-img'></img>
      <h3 className="project-card__title" data-text="portfolio-project-personalBlog-title" data-animatedWord>{title}</h3>
      <div className="project-card__item-header-status"><span data-text="portfolio-project-status-in-progress">En desarrollo</span></div>
      <p className="project-card__item-header-technologies"><span data-text="portfolio-project-technologies">Tecnologías</span>: HTML, SASS, TypeScript, PHP, Laravel, Blade, MySql...</p>
      <p className="portfolio__item-header-description" data-text="portfolio-project-personalBlog-p1">{description}</p>
      <ul className="project-card__item-links ">
        <li className="portfolio__item-link portfolio__item-link-github">
          <a href="">
            <GithubIcon></GithubIcon>
          </a>
        </li>
        <li className="portfolio__item-link portfolio__item-link-visit">
          <a href="https://github.com/Rickhersd" data-text="portfolio-project-view-project" className="visit-locked">Visitar Sitio</a>
        </li>
      </ul>  
    </div>
  )
}

export default ProjectCard  