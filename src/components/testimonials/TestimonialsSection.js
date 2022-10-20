import React from 'react'
import './TestimonialsSectionStyles.css'
import Fade from 'react-reveal/Fade';

import Ross from '../../assets/ross.jpg'
import Rachel2 from '../../assets/rachel2.jpg'
import Joey from '../../assets/joey.jpg'
import Monica from '../../assets/monica.jpg'
import Chandler from '../../assets/chandler.jpg'


const TestimonialsSection = () => {
    return (
        <>
        <div className='testimonials-section'>
            <div className="container">
                <div className="content">
                    <h2><span>Hear</span> What Are Clients Say</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi officiis unde perferendis voluptas laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga quisquam illo. Obcaecati, voluptatum.</p>


                            <div className='flex-right'>

                            <Fade top>
                                <div className='thumbnail-container'>
                                    <div>
                                        <img src={ Rachel2 } alt="Rachel" loading='lazy'/>
                                        {/* <img src= { Therapy } alt="Aetna Logo" loading="lazy" />                     */}
                                        <p>"Love this place. My counselors are the best! Great meetings, great help, great people! Helps you get to where you want to be in life"</p>
                                        <p>- Rachel Green</p>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='thumbnail-container'>
                                    <img src= { Ross } alt="Beacon Logo" loading="lazy" /> 
                                    <p>"I had been to outpatients in the past where there was little addiction expertise, but at Helping Hands, I found staff that were truly invested in helping me get sober and restore my mental health."</p>
                                    <p>- Ross Geller</p>
                                </div>
                            </Fade>

                            <Fade top>
                                <div className='thumbnail-container'>
                                    <img src= { Joey } alt="Bluecross Logo" loading="lazy" />   
                                    <p>Evidence-based practices that give you the best chance of recovery</p>
                                    <p>- Ross Geller</p>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className='thumbnail-container'>
                                    <img src= { Monica } alt="Cigna Logo" loading="lazy" /> 
                                    <p>There are a variety of programs and organizations that fall under the umbrella of employment-based recovery support services.</p>  
                                    <p>- Ross Geller</p>
                                </div>
                            </Fade>                            
                    
                            <Fade top>
                                <div className='thumbnail-container'>
                                    <img src= { Chandler } alt="Bluecross Logo" loading="lazy" />   
                                    <p>Evidence-based practices that give you the best chance of recovery</p>
                                    <p>- Ross Geller</p>
                                </div>
                            </Fade>


                    </div>
                </div>
            </div>
        </div>



</>
    )
}

export default TestimonialsSection
