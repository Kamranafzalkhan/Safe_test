import React from 'react';
import './Hero.css';
import F1_1 from '../Assets/F1_1.png';
const Hero = () => {
  return (
    <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="home-primary-heading">
            What our model do for you ?
          </h1>
          <p className="home-primary-text">
          Our model aims to make crowd management more efficient and improve security of people by using innovative technologies to detect suspicious activities
          </p>
          <button className="secondary-button">
            Get Started
          </button>
        </div>
        <div className="home-image-section">
          <img src={F1_1} alt="" />
        </div>
    </div>
  )
};

export default Hero;