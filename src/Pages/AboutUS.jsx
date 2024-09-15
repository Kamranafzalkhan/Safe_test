import React from 'react';
import './Pages.css';
import Kamran from '../components/Assets/Kamran_1_1_1_1.png';
import Gaurav from '../components/Assets/Gaurav_1_1_1_1.png';
import Mariya from '../components/Assets/Mariya_1_1_1_1.png';
import Jaya from '../components/Assets/Jaya_1_1_1_1.png';
const AboutUs = () => {
  return (
    <div className="about_us-section-wrapper">
      <h1 className='about_us-primary-heading'>Our Devlopers</h1>
      <div className='about_us-section'>
        <div className='about_us-section1-part1'>
          <div className='about_us-section1-bottom'>
            <img src={Kamran} alt="" />
            <p>
              UI and Frontend Devloper 
            </p>
            <h3>Kamran Afzal Khan</h3>
          </div>
          <div className='about_us-section1-bottom'>
            <img src={Gaurav} alt="" />
            <p>
              ML Model and Backend Devloper
            </p>
            <h3>Gaurav Singh Chauhan</h3>
          </div>
        </div>
        <div className='about_us-section1-part1'>
          <div className='about_us-section1-bottom'>
            <img src={Mariya} alt="" />
            <p>
              Backend Devloper and Database
            </p>
            <h3><mariya>Mariya Parveen</mariya></h3>
          </div>
          <div className='about_us-section1-bottom'>
            <img src={Jaya} alt="" />
            <p>
              <jaya>Frontend Devloper</jaya> 
            </p>
            <h3><shah>Jaya Shah</shah></h3>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutUs;