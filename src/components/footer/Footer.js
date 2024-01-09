import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import logo from '../../assets/nav-logo.png'
import "./FooterStyles.css";
import { MdPhoneCallback } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";


import { Link as LinkRoll } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="top">
            <div className="logo-footer">
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <Link to='/'>
                  <img src={logo} alt="Oxnard Rehab Logo" loading="lazy"/>
                </Link>
              </LinkRoll>
            </div>


            <div>
              <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                <BsFillArrowUpCircleFill className="icon" />
              </LinkRoll>
            </div>

          </div>



          <div className="col-container">


{/* NAVIGATION */}

            <div className="col">
              <h3>Navigation</h3>

{/* HOME */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/">
                    <p>Home</p>
                  </Link>
                </LinkRoll>
              </div>

{/* JOB */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/insurance">
                    <p>Insurance</p>
                  </Link>
                </LinkRoll>
              </div>


{/* CONTACT */}

            <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/contact">
                    <p>Call Us</p>
                  </Link>
                </LinkRoll>
              </div>

            </div>









            <div className="col">
              <h3>PROGRAMS</h3>

{/* PHP */}
              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/mental-health">
                    <p>Mental Health Programs</p>
                  </Link>
                </LinkRoll>
              </div>
{/* IOP */}

              <div>
                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
                  <Link to="/substance-abuse">
                    <p>Substance Abuse Programs</p>
                  </Link>
                </LinkRoll>
              </div>

{/* OP */}


            </div>






{/* Contact */}
            <div className="col">
              <h3>CONTACT</h3>
              <div>
                  <h2><span><MdPhoneCallback /></span> <a href="tel:1234567890">(323) 792-0515</a></h2>
              </div>

              <div>
                  <h2><span><MdAlternateEmail  /><a href = "mailto: info@hhrci.biz">info@hhrci.biz </a></span></h2>
              </div>

              <div>
                  <h2><span><FiMapPin  /></span> Los Angeles, California</h2>
              </div>
            </div>
          </div>








          <p className="copyright">
            <p>
              &copy; 2023 Helping Hands Rehab All rights
              reserved
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
