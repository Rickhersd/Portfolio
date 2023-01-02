import React from "react";
import ProjectsGroup from "../components/projectsGroup";
import Navbar from "../components/navbar";
import Services from "../components/services";
import Section from "../components/section";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      Home!
      <Services></Services>
      <ProjectsGroup></ProjectsGroup>
      <footer>
        <div>
        <ContactForm></ContactForm>
        </div>
        <div>
        <section className="contact-end"> 
        <div className="contact-end__social-links-container">
          <a id="contact__email-address-icon" >
            <svg className="contact-end__social-link" role="img" width="45" height="45" viewBox="0 0 45 45">
              <use href="#svg-footer__email-icon"></use>
            </svg>
          </a>
          <a href="https://github.com/Rickhersd">
            <svg className="contact-end__social-link" role="img" width="45" height="45" viewBox="0 0 45 45">
              <use href="#svg-footer__github-icon"></use>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/ricardosan-webdev/">
            <svg className="contact-end__social-link" role="img" width="45" height="45" viewBox="0 0 45 45">
              <use href="#svg-footer__linkedin-icon"></use>
            </svg>
          </a>
        </div>
        <div className="contact-end__handcrafted-by">
          <p data-text="contact-phrase" className="contact-end__phrase">EL CÓDIGO ES CAPAZ DE COSAS INCREÍBLES</p>
          <p data-text="contact-handcrafted-by">Esta página web fue hecha por mí © 2022</p> 
        </div>
      </section> 
        </div>  

      </footer>
    </div>
  )
};

export default Home;