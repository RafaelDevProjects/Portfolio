import React from "react";
import '../../App.css'
import Hero from "../../components/Hero/Hero";
import Skills from "../../components/Skills/Skills";
import WorkExperience from "../../components/WorkExperience/WorkExperience";
import ContactMe from "../../components/ContactMe/ContactMe";

const MainPage = () => {
    return (
      <div className="container">
        <Hero />
        <Skills />
        <WorkExperience />
        <ContactMe />
      </div>
    );
  };

  export default MainPage;