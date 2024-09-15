import React from 'react';
import './About.css';
import F22 from '../Assets/F22.png';
const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={F22} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="about-primary-heading">
        Improved Security and Safety !!
        </h1>
        <p className="about-primary-text">
        "SAFE SPHERE" is an innovative machine-learning-driven model designed to address a common challenge faced by common people.
        </p>
        <p className="about-primary-text">
        It helps manage crowds at various places such as railway stations, bus stations, theaters. It also helps us in the detection of suspicious activity in such crowded places.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Watch Vedio</button>
        </div>
      </div>
    </div>
  )
};

export default About;