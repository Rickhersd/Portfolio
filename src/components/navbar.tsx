import React from 'react'
import '../sass/_nav.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav id="nav" data-darkmode>
      <div className="nav__container">
        <Link to="home" className="nav__name">Ricardo Sánchez</Link>
        <ul className="nav__list-container">
          <li className="nav__list-item nav__item-about-me">
            <Link to="about-me">
              Sobre mí
            </Link>
          </li>
          <li className="nav__list-item nav__item-contact">
            <Link to="blog">
              blog
            </Link>
          </li>
          <li className="nav__list-item nav__item-porfolio">
            <Link to="projects">
              Porfolio
            </Link>
          </li>
          <li className="nav__list-item nav__item-contact">
            <Link to="contact">
              Contacto
            </Link>
          </li>
          <span className="nav__span"></span>
        </ul>
      </div>
    </nav> 
  )
}
