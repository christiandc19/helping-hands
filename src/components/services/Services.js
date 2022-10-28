import React from 'react'
import {Link} from 'react-router-dom'
import { Link as LinkRoll } from 'react-scroll'
import './ServicesStyles.css'
import './ServicesCardsStyles.css'
import Fade from 'react-reveal/Fade';
import ServicesCards from './ServicesCards';
import Services1 from '../../assets/mental-illness.png'
import Services2 from '../../assets/substance-use.png'
import Services3 from '../../assets/addiction-treatment.png'
import Services4 from '../../assets/employment-assistance.png'
import Service3 from '../../assets/treatment-image-1.jpg'

import WelcomePhoto from '../../assets/welcome-photo.jpg'
import { FaPills } from 'react-icons/fa'
import { FaHandHoldingHeart } from 'react-icons/fa'
import { FaClinicMedical } from 'react-icons/fa'
import { BsPeopleFill } from 'react-icons/bs'
import { FaUserNurse } from 'react-icons/fa'
import { MdGroups } from 'react-icons/md'



const Services = () => {
  return (
    <>


<div className='welcome-section'>
            <div className='welcome-section-description'>
                <Fade left>
                <h1>Welcome to Helping Hands Rehab Center</h1>

                <br /> <br />
                <p>At Helping Hands Rehab Center, we offer different levels of care based on each individual’s needs. Our programs consist of an intensive outpatient program (IOP) and a more demanding and structured partial hospitalization program (PHP). You can be confident that our caring and professional staff will recommend the right level of care for you or your loved one.                    </p><br />
                <p>Counselor and client will work together to compose a treatment plan with clear objectives and goals based on key areas intake assessment. It will include: challenges that the client may encounter during recovery process, clear methods of navigating obstacles in recovery, action steps to be taken by the program and/or client to overcome the challenges of recovery.
                </p><br />
                </Fade>
            </div>
        
            <div className='welcome-photo'>
                <img src={ WelcomePhoto } alt="" />
            </div>
</div>

<hr className='hr-container'/>


{/*  */}

    <div className='services'>
        <div className="container">
            <Fade top>
            <div className="content">
                <h2>OUR SERVICES</h2>
                <p>At Helping Hands Rehabilation center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
            </div>
            </Fade>
        </div>
    </div>


{/* ---------------------------------------------- START of CARDS -------------------------------------------------*/}

<div className='main'>
<Fade bottom>
    <ServicesCards
    Image = { Services1 }
    CardName="Mental Health Services​"
    Description="Clients suffer from both mental health disorders and addiction. Therefore, we provide treatment for co-occurring disorders, addressing both conditions simultaneously."
    />

<ServicesCards
    Image = { Services2 }
    CardName="Substance Use"
    Description="We treat a multitude of substance use disorders. Whether the client is suffering from an alcohol addiction, prescription drug addiction, we can help."
    />
</Fade>

<Fade bottom>
<ServicesCards
    Image = { Services3 }
    CardName="Addiction Treatment"
    Description="We offer programs that's tailored to the needs of the client. With the help of our individualized treatment programs, clients can find the healing and support they need."
    />


<ServicesCards
    Image = { Services4 }
    CardName="Employment Assistance"
    Description="There are a variety of programs and organizations that fall under the umbrella of employment-based recovery support services. Jobs Assistance is available."
    />
</Fade>
    </div>

    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
    <Link to="/treatment">
    <div className='service-cards-btn'>
        <button>Learn More</button>
    </div>
    </Link>
    </LinkRoll>

{/* ---------------------------------------------- END of CARDS -------------------------------------------------*/}



{/* ---------------------------------------------- THIRD SECTION - SERVICES -------------------------------------------------*/}
<hr className='hr-container'/>

<div className='section-3'>
      <div className='section-3-description'>
        <Fade left>

                    <p><span> The Best Luxury Addiction Treatment in Los Angeles, CA </span></p>
                    <br /> <br />
                    <p>
                    The Helping Hands Treatment Center has a strong commitment to mental health and addiction and improving lives of Americans, and as such we will continue to provide services to those who are seeking support and treatment. We are a fully accredited facility with exemplary standing; the Health Centre achieves the highest standards of care and excellent outcomes.
                    </p><br />
                    <p>
                    As a luxury rehabilitation centre, our location offers true and complete freedom to guide you on your recovery path. At Helping Hands Treatment Center,  you will receive treatments  that are fully personalized, holistic, family oriented, and scientifically approached.                     
                    </p><br />
        </Fade>

        </div>
                
                <div className='section-3-icons'>
                    <div className='icon-container'>
                        <FaPills className='mail-icon icon' />
                        <p>Medication Assitance</p>
                    </div>
                    <div className='icon-container'>
                        <FaHandHoldingHeart className='mail-icon icon' />
                        <p>24/7 Support</p>
                    </div>
                    <div className='icon-container'>
                        <FaClinicMedical className='mail-icon icon' />
                        <p>Proven Methods</p>
                    </div>
                    <div className='icon-container'>
                        <BsPeopleFill className='mail-icon icon' />
                        <p>One-to-One Ration</p>
                    </div>
                    <div className='icon-container'>
                        <MdGroups className='mail-icon icon' />
                        <p>Dedicated Staff</p>
                    </div>
                    <div className='icon-container'>
                        <FaUserNurse className='mail-icon icon' />
                        <p>24/7 Nurse On-Site</p>
                    </div>



                    {/* <img src={ Service3 } alt="" /> */}
                </div>
        </div>

{/* ---------------------------------------------- END of THIRD SECTION - SERVICES -------------------------------------------------*/}
<hr className='hr-container'/>


  </>


  )
}

export default Services
