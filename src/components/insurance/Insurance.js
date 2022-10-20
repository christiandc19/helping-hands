import React from 'react'
import './InsuranceStyles.css'
import Fade from 'react-reveal/Fade';


const Insurance = () => {
    return (
        <>

        <div className='insurance'>
            <div className="container">
                <div className="content">
                    <Fade left>
                    <h2><span>Accepted</span> Insurance</h2>
                    </Fade>
                    <Fade right>
                    <p>If you don’t see your insurance provider below, please reach out to us to find a way to assist you further.</p>
                    </Fade>
                    <div><button>Contact Us</button></div>
                </div>
            </div>
        </div>

            </>

    )
}

export default Insurance
