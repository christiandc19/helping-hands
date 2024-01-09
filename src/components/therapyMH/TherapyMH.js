import React from "react";
import { Link as LinkRoll } from "react-scroll";
import Zoom from 'react-reveal/Zoom';

import "./TherapyMH.css";
import { Link } from "react-router-dom";

import Anxiety from "../../assets/anxiety.webp";
import Depression from "../../assets/depression.webp";
import Bipolar from "../../assets/bipolar.webp";
import Stress from "../../assets/stress.webp";

const TherapyMH = () => {
  return (
    <>
      <div className="TherapyMH ">
        <div className="content container">
          <Zoom duration={2000}>
            <div className="TherapyMH-header">
              <div className="left-content container">
                <h1>LET'S TALK ABOUT MENTAL HEALTH</h1>
                <p>MENTAL HEALTH TREATMENT PROGRAMS</p>
                <br />
              </div>
            </div>
          </Zoom>

          <div className="TherapyMH-flex">
            <div className="mh-box">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/anxiety">
                    <img src={Anxiety} alt="Anxiety" loading="lazy" />
                </Link>
              </LinkRoll>
                <h1>ANXIETY</h1>
              </div>

            <div className="mh-box">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/depression">
                  <img src={Depression} alt="Depression" loading="lazy" />
                </Link>
              </LinkRoll>
                <h1>DEPRESSION</h1>
              </div>

            <div className="mh-box">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/bipolar-disorder">
                  <img src={Bipolar} alt="Bipolar" loading="lazy" />
                </Link>
              </LinkRoll>
                <h1>BIPOLAR</h1>
              </div>

            <div className="mh-box">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to="/acute-stress-disorder">
                  <img src={Stress} alt="Stress" loading="lazy" />
                </Link>
              </LinkRoll>
                <h1>ACUTE STRESS DISORDER</h1>
              </div>
          </div>

          <div className="therapyMH-btn">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/mental-health">
                <div className="TherapyMH-btn">
                  <button>
                    VIEW ALL
                  </button>
                </div>
              </Link>
            </LinkRoll>
          </div>

        </div>
      </div>
    </>
  );
};

export default TherapyMH;
