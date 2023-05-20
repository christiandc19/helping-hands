import React from "react";
import "./Cards.css";

import Icon1 from "../../assets/top-flex-icon1.png";
import Icon2 from "../../assets/top-flex-icon2.png";
import Icon3 from "../../assets/top-flex-icon3.png";

const Cards = () => {
  return (
    <>

      <div className="top-flex">

          <div className="top-flex-item">
              <div className="top-flex-icon">
              <img src={Icon1} alt="Mental Health" loading="lazy" />
              </div>
              <div className="top-flex-text">
                <h1>Mental Health</h1>
                <p>Depending on your needs, we offer treatment for co-occurring disorders that can address both mental health and addiction disorders at the same time.</p>
              </div>
          </div>

          <div className="top-flex-item">
              <div className="top-flex-icon">
              <img src={Icon2} alt="Substance Use" loading="lazy" />
              </div>
              <div className="top-flex-text">
                <h1>Substance Abuse</h1>
                <p>No matter what type of addiction or mental health condition you are dealing with, there’s something for everyone.</p>
              </div>
          </div>


          <div className="top-flex-item">
              <div className="top-flex-icon">
              <img src={Icon3} alt="Job Assistance" loading="lazy" />
              </div>
              <div className="top-flex-text">
                <h1>Employment Assistance</h1>
                <p>We offer a variety of employment tools and resources to help you land on your feet and get hired at a great company in recovery.

Learn More</p>
              </div>
          </div>
      </div>



    </>
  );
};

export default Cards;
