import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from 'react-scroll'
import './HeroStyles.css'

import BgVideo from '../../assets/hero-vbg2.mp4'

const Hero = () => {
    return (
        <div className='hero'>

            <video src={BgVideo} autoPlay muted loop className='video-bg' />
            <div className='bg-overlay'></div>
            <div className="container">
                <div className="content">
                <Fade top><h1>Helping Hands Rehab</h1></Fade> 
                
                <Fade bottom>
                    <h2 className='subtitle'>Addiction Resources Center</h2>
                </Fade>
                    <blockquote>"We will love  you until you can love yourself again." </blockquote>
                    <p>John Doe - Santa Monica Rehab</p>
                    <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                    <Link to="/about-us">
                    <div><button>Learn More</button></div>
                    </Link>
                    </LinkRoll>    
                </div>
            </div>
        </div>
    )
}

export default Hero
