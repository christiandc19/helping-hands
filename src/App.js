import React from 'react'
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';
import InsuranceSection from './components/insurance/InsuranceSection';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <InsuranceSection />
      <Footer />
    </>
  );
}

export default App;
