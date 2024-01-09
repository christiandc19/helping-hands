import React, { useRef } from "react";
import { BsFillPinMapFill } from 'react-icons/bs';
import { AiOutlinePhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';


import './ContactForm.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


// Popup message after send button is clicked
const feedbackEl = document.querySelector(".feedback");
feedbackEl.setAttribute("class", "feedback");
setTimeout(function() {
feedbackEl.setAttribute("class", "feedback hidden");
}, 3000);




        //    Service Id                     Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_hsunksm', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>
<div className="contactform">

<section className="container">
<div>

          <div className="contact-form-flex">

                    <div className="contact-form-left">
                      <div className="contact-cards-container">
      
                        <div className="get_form_inner2 card1 gradient-border">
                                <h2>CALL US</h2>
                                <p><AiOutlinePhone /><a href="tel:3237920515"> +1 (323) 792-0515</a></p>
                        </div>

                        <div className="get_form_inner2 card2 gradient-border">
                                <h2>EMAIL</h2>
                                <p><AiOutlineMail /> Info@helpinghands.biz  </p><br />
                        </div>

                        <div className="get_form_inner2 card3 gradient-border">
                                <h2>LOCATION</h2>
                                <p><BsFillPinMapFill /> 1776 North Highland Ave, Los Angeles CA 90035 </p>
                        </div>

                    </div>

                    </div>

                    <div className="contact-form-right">
                        <div className="get_form_inner">
                            <div className="get_form_inner_text">
                              <h3>Get In Touch</h3>
                              <p><i>We'll keep your contact information strictly confidential.</i></p><br/>
                            </div>

                            <form ref={form} onSubmit={sendEmail}>
                              <div className="inputs">
                                <input type="text" name='name' placeholder='Your Name' required /> <br/>
                                <input type="text" name='email' placeholder='Your Email' required /> <br/>
                                <input type="tel" name='phone' placeholder='Your Phone' required /> <br/>
                                <input type="text" name='subject' placeholder='Subject' required /> <br/>
                              </div>

                              <div>
                                <textarea name="message" placeholder="How can we help?" cols="30" rows="10" required></textarea>
                                <input type="submit" value="Submit" />
                              </div>

                              <div className="textarea2 feedback hidden">
                                    <textarea name="message2" cols="30" rows="3" required>Message Sent to Helping Hands!</textarea>
                              </div>
                            </form>
                        </div>
                    </div>

            </div>
        </div>
</section>


</div>
        </>
    )
}

export default ContactForm