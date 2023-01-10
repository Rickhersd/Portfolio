import React from 'react'
import '../sass/_nav.scss'
import { Link } from 'react-router-dom'
import DarkmodeBtn from './darkmodeBtn'
import LanguageBtn from './languageBtn'
import LogotypeIcon from '../images/logotype.svg'

export default function Navbar() {
  return (
    <nav id="nav" data-darkmode>
      <div className="nav__container">
        <Link to="home" className="nav__name">
          <LogotypeIcon></LogotypeIcon>
        </Link>
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
          <li className="nav__list-item-config">
            <LanguageBtn></LanguageBtn>
            <DarkmodeBtn></DarkmodeBtn>
          </li>
        </ul>
      </div>
    </nav> 
  )
}
