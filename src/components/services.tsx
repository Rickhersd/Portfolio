import React from 'react'
import Service from './service'

import '../sass/services.scss'
import databaseIcon from '../images/databaseCog.svg'
import { Link } from 'react-router-dom'

export default function Services() {

  console.log(typeof databaseIcon)
  return (
    <section className='services__section'>
      <header className='services__header'>
        <h1 className='services__header-title'>Un Desarrolador Web Completo</h1>
        <h6 className='services__header-text'>Estyo contanste aprendizaje para hacer frente a toda clase de proyectos  solucionales a todo tipo de proyectoss</h6> 
      </header>
      <div className='services-cont'>
        <Service 
          title={'Desarrallador Frontent'} 
          description={'Desarollo del aspecto visual de sitios web'} 
          svgUrl={databaseIcon}></Service>
        <Service 
          title={'Desarrollador Backend'} 
          description={'Matenimiento y estrutura de la logica de paginas Web: desarrollo de blogs, e-commers, etc'} 
          svgUrl={databaseIcon}></Service>
        <Service 
          title={'UX and UI Designer'} 
          description={'Desarrallo para'} 
          svgUrl={databaseIcon}></Service>
      </div>
      <div>
        <Link to=''><button> About me</button></Link>
        <Link to=''><button> Contact-me</button></Link>
      </div>
    </section>
  )
}
