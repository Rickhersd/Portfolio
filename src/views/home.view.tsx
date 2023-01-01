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
      <ContactForm></ContactForm>
    </div>
  )
};

export default Home;