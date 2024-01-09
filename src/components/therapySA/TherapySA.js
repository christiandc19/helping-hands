import React from "react";
import Zoom from 'react-reveal/Zoom';
import { Link as LinkRoll } from "react-scroll";

import "./TherapySA.css";
import { Link } from "react-router-dom";

import  Alcohol  from "../../assets/alcohol.webp";
import  Prescriptions  from "../../assets/prescriptions.webp";
import  Heroin  from "../../assets/heroin.webp";
import  Xanax  from "../../assets/xanax.webp";

const TherapySA = () => {
  return (
    <>
      <div className='sectionbg'>
      <div className="TherapySA container">
        <div className="content">
          <Zoom duration={2000}>
            <div className="TherapySA-left">
              <div className="left-content">
                <h1>Types of Substance Addiction Disorder We Treat</h1>
                <p>
                  Here at Helping Hands Rehab, we offer a full array of
                  affordable drug rehab programs that can take addicts from
                  detox to inpatient or outpatient care and back home again.
                </p>


              <div className="TherapySA-btn">
                      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                        <Link to="/substance-abuse">
                          <div className="hero-btn">
                            <button>
                              VIEW ALL
                            </button>
                          </div>
                        </Link>
                      </LinkRoll>
                    </div>

              </div>
            </div>
          </Zoom>

          <div className="TherapySA-right">

            <div className="sa-box">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/alcohol">
                    <img src={Alcohol} alt="Alcohol Addiction" loading="lazy" />
                    <h1>ALCOHOL ADDICTION</h1>
                  </Link>
                </LinkRoll>
            </div>

            <div className="sa-box">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/prescriptions">
                    <img src={Prescriptions} alt="Prescriptions Addiction" loading="lazy" />
                    <h1>PRESCRIPTIONS ADDICTION</h1>
                  </Link>
                </LinkRoll>
            </div>

            <div className="sa-box">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/heroin">
                    <img src={Heroin} alt="Heroin Addiction" loading="lazy" />
                    <h1>HEROIN ADDICTION</h1>
                  </Link>
                </LinkRoll>

            </div>

            <div className="sa-box">
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/xanax">
                    <img src={Xanax} alt="Xanax Addiction" loading="lazy" />
                    <h1>XANAX ADDICTION</h1>
                  </Link>
                </LinkRoll>
            </div>

          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default TherapySA;
