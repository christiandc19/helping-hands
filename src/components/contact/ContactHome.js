import React from "react";
import "./ContactHome.css";

const ContactHome = () => {
  return (
    <>
      <div className="contact-home">

        <div className="contact-home-content">
          <div className="contact-caption">
          <h1>Want to Make An Appointment or Have a Questions?</h1>
          <p>
            Our Addiction and Recovery Support team is available 24 hours a day
            7 Days a week.
          </p>

          <div className="hero-btn">
                <button class="hero-cta">
                    <span>CONTACT US</span>
                    <svg viewBox="0 0 13 10" height="10px" width="15px">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </button>
            </div>


          <h2>"The road to recovery starts on Helping Hands Rehab"</h2>
        </div>
      </div>
      </div>
    </>
  );
};

export default ContactHome;
