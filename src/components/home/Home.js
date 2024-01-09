import React from 'react'
import InsuranceSection from '../insurance/InsuranceSection';
import WhatWeDo from '../whatWeDo/WhatWeDo';
import ContactForm from '../contact/ContactForm';
import MissionHome from '../mission/MissionHome';
import TherapySA from '../therapySA/TherapySA';
import TherapyMH from '../therapyMH/TherapyMH';



const home = () => {
  return (
    <>
    <WhatWeDo />
    <TherapyMH />
    <TherapySA />
    <MissionHome />
    <InsuranceSection />
    <ContactForm />
    </>
  )
}

export default home
