import React from "react";
import SkillsWheel from "../components/skillsWheel";



const AboutMe = () => {

  const options1 = {
    maxWidth: 2000,
    circleRadioInPx: 350,
    numberOfSkillsToShow: 10,
    className: 'skillwheel__large-size',
    circleCenter: {
      x: 450,
      y: 450,
    },
    autoRotationAmount: 1,
  }

  const options2 = {
    maxWidth: 720,
    circleRadioInPx: 250,
    numberOfSkillsToShow: 8,
    className: 'skillwheel__middle-size',
    circleCenter: {
      x: 350,
      y: 350,
    },
    autoRotationAmount: -1,
  }

  const options3 = {
    maxWidth: 600,
    circleRadioInPx: 150,
    numberOfSkillsToShow: 6,
    className: 'skillwheel__small-size',
    circleCenter: {
      x: 250,
      y: 250,
    },
    autoRotationAmount: 1,
  }

  return (
    <div>
      About me
      <div className="skills__radial">
        <div className="skills__radial-container skills__radial-container-frontend">
          <SkillsWheel
            skillsType="frontend"
            options={options1}
          ></SkillsWheel>
          <SkillsWheel
            skillsType="frontend"
            options={options2}
          ></SkillsWheel>
          <SkillsWheel
            skillsType="frontend"
            options={options3}
          ></SkillsWheel>
        </div> 
        <div className="skills__radial-container skills__radial-container-backend">
          <SkillsWheel
            skillsType="backend"
            options={options1}
          ></SkillsWheel>
          <SkillsWheel
            skillsType="backend"
            options={options2}
          ></SkillsWheel>
          <SkillsWheel
            skillsType="backend"
            options={options3}
          ></SkillsWheel>
        </div>
      </div>
    </div>
  )
};

export default AboutMe;