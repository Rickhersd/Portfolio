import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import GithubIcon from '../images/github.svg'
import ProjectCardInterface from '../js/interfaces/projectCardInterface';

function ProjectCard( {title, description, technologies, urlPage}:ProjectCardInterface) {

  const [showTechs, setShowTechs] = useState(false);

  const showTechnologies = () => {
    setShowTechs(!showTechs)
  }

  return (
    <div className="project-card" data-intersection="false">
      <img src='' className='project-card__img' alt='Proyect-img'></img>
      <div className="project-card__btns-group">
        <button className="project-card__btns-badged"><span data-text="portfolio-project-status-in-progress">En desarrollo</span></button>
        <button onClick={() => showTechnologies()} className="project-card__btns-badged">Technologias </button>
      </div>
      <h3 className="project-card__title" data-text="portfolio-project-personalBlog-title" >{title}</h3>
      <div className="project-card__content">{ !showTechs? description : technologies}</div> 
      <ul className="project-card__links ">
        <li className="project-card__link portfolio__item-link-github">
          <a href="https://github.com/Rickhersd">
            <GithubIcon className='project-card__github-icon'></GithubIcon>
          </a>
        </li>
        <li className="project-card__link portfolio__item-link-visit">
          <Link to={urlPage} data-text="portfolio-project-view-project" className="visit-locked">Visitar Sitio</Link>
        </li>
      </ul>  
    </div>
  )
}

export default ProjectCard  