import React from "react";
import Fade from "react-reveal/Fade";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="hero-container">
          <div className="content">
          <Fade left>
              <h2 className="subtitle">WELCOME TO</h2>
            </Fade>
            <Fade right>
              <h1 className="animate-charcter">HELPING HANDS REHAB</h1>
            </Fade>

            <Fade left>
              <h2 className="subtitle">MENTAL HEALTH AND SUBSTANCE ABUSE TREATMENT FACILITY</h2>
            </Fade>

            <Fade bottom>
              <p>"Start your treatment journey with us"</p>
            </Fade>
          </div>

            <div className="hero-btn">
                <button class="hero-cta">
                    CONTACT US
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
