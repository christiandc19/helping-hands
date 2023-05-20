import React from 'react'
import Cards from '../servicesCards/Cards'
import InsuranceSection from '../insurance/InsuranceSection';
import WhatWeDo from '../whatWeDo/WhatWeDo';
import ContactForm from '../contact/ContactForm';
// import Conditions from '../conditions/Conditions';
import MissionHome from '../mission/MissionHome';
import TherapySA from '../therapySA/TherapySA';
import TherapyMH from '../therapyMH/TherapyMH';
import ContactHome from '../contact/ContactHome';



const home = () => {
  return (
    <>
    <TherapyMH />
    {/* <Cards /> */}
    <WhatWeDo />
    <ContactHome />
    <TherapySA />
    {/* <Conditions /> */}
    <InsuranceSection />
    <MissionHome />
    <ContactForm />
    </>
  )
}

export default home
