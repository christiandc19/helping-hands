import React from "react";
import { Link } from "react-router-dom";
import { Link as LinkRoll } from "react-scroll";
import "./MenusSA.css";



const MenusSA = () => {
  return (
    <>
      <div className="mh-cards-header container">
        <h1>
          HELPING HANDS REHAB TREATMENT CENTER OFFERS VARIOUS SUBSTANCE ABUSE ADDICTION
          PROGRAMS
        </h1>
        <p>
          At Helping Hands Rehab Treatment Center, clients receive individual
          therapy alongside a range of additional treatments, including relapse
          prevention, trauma therapy, mindfulness meditation, transportation,
          yoga, and more. We offer support that clients need to allow them to
          gradually go back to treatment.{" "}
        </p>
      </div>


      {/* Mental Health Thumbnails */}

      <div class="sa-card-wrap container">

        <div class="sa-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/alcohol">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/alcoholism.jpg" alt="Alcoholism" loading="lazy"/>          
                <h1>ALCOHOLISM</h1>              
              </Link>
            </LinkRoll>
        </div>



        <div class="sa-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/cocaine">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/cocaine.jpg" alt="Alcoholism" loading="lazy"/>          
                <h1>COCAINE ADDICTION</h1>              
              </Link>
            </LinkRoll>
        </div>


        <div class="sa-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/fentanyl">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/fentanyl.jpg" alt="Alcoholism" loading="lazy"/>          
                <h1>FENTANYL ADDICTION</h1>              
              </Link>
            </LinkRoll>
        </div>


        <div class="sa-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/heroin">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/heroin.jpg" alt="Alcoholism" loading="lazy"/>          
                <h1>HEROIN ADDICTION</h1>              
              </Link>
            </LinkRoll>
        </div>


        <div class="sa-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/kratom">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/kratom.jpg" alt="Alcoholism" loading="lazy"/>          
                <h1>KRATOM ADDICTION</h1>              
              </Link>
            </LinkRoll>
        </div>


        <div class="sa-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/mdma">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/mdma.jpg" alt="Alcoholism" loading="lazy"/>          
                <h1>MDMA ADDICTION</h1>              
              </Link>
            </LinkRoll>
        </div>


        <div class="sa-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/meth">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/meth.jpg" alt="Alcoholism" loading="lazy"/>          
                <h1>METH ADDICTION</h1>              
              </Link>
            </LinkRoll>
        </div>


        <div class="sa-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/opiate">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opiate.jpg" alt="Alcoholism" loading="lazy"/>          
                <h1>OPIATE ADDICTION</h1>              
              </Link>
            </LinkRoll>
        </div>


        <div class="sa-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/opioid">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/opioid.jpg" alt="Alcoholism" loading="lazy"/>          
                <h1>OPIOID ADDICTION</h1>              
              </Link>
            </LinkRoll>
        </div>

        <div class="sa-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/oxycodone">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/oxycodone.jpg" alt="Alcoholism" loading="lazy"/>          
                <h1>OXYCODONE ADDICTION</h1>              
              </Link>
            </LinkRoll>
        </div>


        <div class="sa-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/prescriptions">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/prescriptions.jpg" alt="Alcoholism" loading="lazy"/>          
                <h1>PRESCRIPTIONS ADDICTION</h1>              
              </Link>
            </LinkRoll>
        </div>

        <div class="sa-card">
            <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
              <Link to="/xanax">
                <img src="https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/xanax.jpg" alt="Alcoholism" loading="lazy"/>          
                <h1>XANAX ADDICTION</h1>              
              </Link>
            </LinkRoll>
        </div>


      </div>

    </>
  );
};

export default MenusSA;
