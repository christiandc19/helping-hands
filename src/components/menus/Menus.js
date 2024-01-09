import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import "./Menus.css";

const Menus = () => {
  return (
    <>
      <div className="mh-cards-header container">
        <h1>
          HELPING HANDS REHAB TREATMENT CENTER OFFERS VARIOUS MENTAL HEALTH
          PROGRAMS
        </h1>
        <p>
          At Helping Hands Rehab Treatment Center, clients receive individual
          therapy alongside a range of additional treatments, including relapse
          prevention, trauma therapy, mindfulness meditation, transportation,
          yoga, and more. We offer support that clients need to allow them to
          gradually go back to treatment.
        </p>
      </div>



      {/* Substance Abuse Thumbnails */}

      <div class="mh-card-wrap container">

        <div class="mh-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/depression">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg" alt="Alcoholism" loading="lazy"/>          
                <h1>DEPRESSION​</h1>              
              </Link>
            </LinkRoll>
        </div>


        <div class="mh-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/anxiety">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg" alt="anxiety" loading="lazy"/>
                <h1>ANXIETY</h1>              
              </Link>
            </LinkRoll>
        </div>


        <div class="mh-card">
          <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/panic-disorder">
              <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg" alt="panic disorder" loading="lazy"/>
              <h1>PANIC DISORDER</h1>
            </Link>
          </LinkRoll>
        </div>



        <div class="mh-card">
          <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/acute-stress-disorder">
              <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg" alt="panic disorder" loading="lazy"/>
              <h1>ACUTE STRESS DISORDER</h1>
            </Link>
          </LinkRoll>
        </div>

        <div class="mh-card">
          <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/adhd">
              <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg" alt="panic disorder" loading="lazy"/>
              <h1>ADHD</h1>
            </Link>
          </LinkRoll>
        </div>

        <div class="mh-card">
          <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/anger-disorder">
              <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg" alt="panic disorder" loading="lazy"/>
              <h1>ANGER DISORDER</h1>
            </Link>
          </LinkRoll>
        </div>

        <div class="mh-card">
          <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/bipolar-disorder">
              <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg" alt="panic disorder" loading="lazy"/>
              <h1>BIPOLAR DISORDER</h1>
            </Link>
          </LinkRoll>
        </div>



        <div class="mh-card">
          <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/ptsd">
              <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/meth.jpg" alt="ptsd disorder" loading="lazy"/>
              <h1>PTSD</h1>
            </Link>
          </LinkRoll>
        </div>

        <div class="mh-card">
          <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/Schizoaffective">
              <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/oxycodone.jpg" alt="ptsd disorder" loading="lazy"/>
              <h1>SCHIZOAFFECTIVE</h1>
            </Link>
          </LinkRoll>
        </div>

        <div class="mh-card">
          <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
            <Link to="/schizophrenia">
              <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/prescriptions.jpg" alt="ptsd disorder" loading="lazy"/>
              <h1>SCHIZOPHRENIA</h1>
            </Link>
          </LinkRoll>
        </div>
      </div>

    </>
  );
};

export default Menus;
