import "./About.css"
import React from 'react';
import Image from "../backbround_image/alien.webp";

const About = () => {

  return (
    <div className="about">
      <h1>About us</h1>
      <p>
          We are enthusiasts about the existence of aliens that
          we decided to tell the world how we feel. One of the 
          things we ally with are the words of American astrophysicist
          , Neil deGrasse Tyson, stating that there is life outside
          of Earth.
      </p>
      <img src={Image} width="600" height="400" alt="cam"/>
    </div>
  )
}
export default About;