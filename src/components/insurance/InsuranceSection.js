import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import './InsuranceSectionStyles.css'
import Aetna from '../../assets/aetna.png'
import Beacon from '../../assets/beacon.png'
import Bluecross from '../../assets/bluecross.png'
import Cigna from '../../assets/cigna.png'
import United from '../../assets/united-healthcare.png'
import Horizon from '../../assets/horizon.png'
import Optima from '../../assets/optima.png'
import Optum from '../../assets/optum.png'
import Umr from '../../assets/umr.png'
import Anthem from '../../assets/anthem.png'



import { Link as LinkRoll } from 'react-scroll'



const InsuranceSection = () => {
    return (
        <div className='InsuranceSection'>
            <div className="container">
                <div className="content">

                <Fade top>
                <div className='card-header'>
                        <h1>WE WORK WITH MAJOR INSURANCE</h1>                   
                        <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                </div>
                </Fade>

                <div className='cards'>

                    <Fade top>
                    <div className='insurance-thumbnail'>
                        <img src= { Aetna } alt="Aetna Logo" loading="lazy" />                    
                    </div>
                    </Fade>


                    <Fade bottom>
                    <div className='insurance-thumbnail'>
                        <img src= { Beacon } alt="Beacon Logo" loading="lazy" />   
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='insurance-thumbnail'>
                        <img src= { Bluecross } alt="Bluecross Logo" loading="lazy" />   
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className='insurance-thumbnail'>
                        <img src= { Cigna } alt="Cigna Logo" loading="lazy" />   
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='insurance-thumbnail'>
                        <img src= { Umr } alt="UMR Insurance Logo" loading="lazy" />   
                    </div>
                    </Fade>


                    <Fade bottom>
                    <div className='insurance-thumbnail'>
                        <img src= { United } alt="United Logo" loading="lazy" />   
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='insurance-thumbnail'>
                        <img src= { Optima } alt="Optima Insurance Logo" loading="lazy" />   
                    </div>
                    </Fade>


                    <Fade bottom>
                    <div className='insurance-thumbnail'>
                        <img src= { Optum } alt="Optum Logo" loading="lazy" />   
                    </div>
                    </Fade>

                    <Fade top>
                    <div className='insurance-thumbnail'>
                        <img src= { Horizon } alt="Horizon Insurance Logo" loading="lazy" />   
                    </div>
                    </Fade>

                    <Fade bottom>
                    <div className='insurance-thumbnail'>
                        <img src= { Anthem } alt="Anthem Insurance Logo" loading="lazy" />   
                    </div>
                    </Fade>

                </div>

                <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                <Link to='/insurance'>
                    <button>View More</button>
                </Link>
                </LinkRoll>

            </div>
        </div>
        </div>
    )
}

export default InsuranceSection
