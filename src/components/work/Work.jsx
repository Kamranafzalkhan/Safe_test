import React from "react";
import './Work.css';
import Surveillance from "../Assets/surveillance.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: Surveillance,
      title: "Real-time Monitoring",
      text: "Our model will work in real time with the help of CCTV cameras",
    },
    {
      image: ChooseMeals,
      title: "Suspicious Behavior",
      text: "Our model will be capable of detecting the Suspicious Behavior of any human being already. ",
    },
    {
      image: DeliveryMeals,
      title: "User-Friendly Interface",
      text: "We will provide users with interactive and dynamic pages with components",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h1 className="work-primary-heading">How It Works ?</h1>
        <p className="work-primary-text">
        Our model will work in real-time as we will access the data from CCTV cameras or we can say that the input data come from CCTV cameras. With a combination of real-time monitoring, data analysis, and predictive modeling, our model seeks to identify and respond to potential security risks efficiently.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;