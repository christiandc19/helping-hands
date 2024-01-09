import React from 'react'

import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import MH from '../components/MH/MH'
import Contact2 from '../components/contact/Contact2'
import Menus from '../components/menus/Menus';


const MHealth = () => {
  return (
    <>
    <Navbar /> 
    <MH />
    <Menus />
    <Contact2 />
    <Footer />
     </>
  )
}

export default MHealth