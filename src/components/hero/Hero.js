import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './Hero.css'

import HeroLogo from '../../assets/heroLogo.png'



const Hero = () => {
    return (
        <>
        <div className='hero'>
            <div className="hero-container">
                <div className="content">

                <div className='hero-logo'>
                    <Fade left>
                    <img src={HeroLogo} width="280px" height="220px" alt="Buena Park Logo" loading="lazy"/>
                    </Fade>
                    </div>
                    
                <Fade top><h1>HELPING HANDS</h1></Fade> 
                <Fade bottom>
                    <h2 className='subtitle'>SUBSTANCE ABUSE AND MENTAL HEALTH TREATMENT FACILITY</h2>
                    <p>Find your happiness and learn to put it first.</p>
                </Fade>

                    <Link to="/treatment"><button>Learn More</button></Link>
                </div>
            </div>
        </div>


        </>
    )
}

export default Hero

