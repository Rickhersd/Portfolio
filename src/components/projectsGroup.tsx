import React from 'react'
import ProjectCard from "./projectCard/projectCard";

import './projectCard.scss';

export default function ProjectsGroup() {
  return (
    <div className='project-group'>
      <ProjectCard 
        title={"Blog Personal"} 
        description={"Sitio web para escribir sobre los proyectos que voy construyendo, mis experiencias como desarrollador y para redactar tutoriales, consejos y trucos de programación. La web tendrá el mismo aspecto visual de mi porfolio web personal, y desde el momento en el que esté desplegada, trabajaré activamente creando contenido"} 
        technologies={" HTML, SASS, TypeScript, PHP, Laravel, Blade, MySql..."}
      ></ProjectCard>
      <ProjectCard 
        title={"Blog Personal"} 
        description={"Sitio web para escribir sobre los proyectos que voy construyendo, mis experiencias como desarrollador y para redactar tutoriales, consejos y trucos de programación. La web tendrá el mismo aspecto visual de mi porfolio web personal, y desde el momento en el que esté desplegada, trabajaré activamente creando contenido"} 
        technologies={" HTML, SASS, TypeScript, PHP, Laravel, Blade, MySql..."}
      ></ProjectCard>
      <ProjectCard 
        title={"Blog Personal"} 
        description={"Sitio web para escribir sobre los proyectos que voy construyendo, mis experiencias como desarrollador y para redactar tutoriales, consejos y trucos de programación. La web tendrá el mismo aspecto visual de mi porfolio web personal, y desde el momento en el que esté desplegada, trabajaré activamente creando contenido"} 
        technologies={" HTML, SASS, TypeScript, PHP, Laravel, Blade, MySql..."}
      ></ProjectCard>
    </div>
  )
}
