import React from "react";
import './Footer.css';
import Safe_sphere1 from "../Assets/Safe_Sphere1.png";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Safe_sphere1} alt="" />
        </div>
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@safe_sphere.com</span>
          <span>press@safe_sphere.com</span>
          <span>contact@safe_sphere.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;