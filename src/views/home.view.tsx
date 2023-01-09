import React from "react";
import ProjectsGroup from "../components/projectsGroup";
import Navbar from "../components/navbar";
import Services from "../components/services";
import Section from "../components/section";
import ContactForm from "../components/ContactForm";

import GmailIcon from '../images/gmailIcon.svg'
import LinkedinIcon from '../images/linkedinIcon.svg'
import GithubIcon from '../images/github.svg'

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      Home!
      <Services></Services>
      <ProjectsGroup></ProjectsGroup>


      <footer className="footer">
        <div className="footer__rightside">
          <ContactForm></ContactForm>
        </div>
        <div className="footer__leftside">
          <section className="contact-end"> 
            <div className="contact-end__social-links-container">
              <a id="contact__email-address-icon" >
                <GmailIcon className='contact-end__social-link'></GmailIcon>
              </a>
              <a href="https://github.com/Rickhersd">
                <GithubIcon className='contact-end__social-link'></GithubIcon>
              </a>
              <a href="https://www.linkedin.com/in/ricardosan-webdev/">
                <LinkedinIcon className='contact-end__social-link'></LinkedinIcon>
              </a>
            </div>
            <div className="contact-end__handcrafted-by">
              <p data-text="contact-phrase" className="contact-end__phrase">EL CÓDIGO ES CAPAZ DE COSAS INCREÍBLES</p>
              <p data-text="contact-handcrafted-by">Esta página web fue hecha por mí © 2022</p> 
            </div>
          </section> 
        </div> 
        <div className="footer__end">

        </div>  
      </footer>
    </div>
  )
};

export default Root;