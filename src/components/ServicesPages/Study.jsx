import React from 'react';
import "./Services.css";
import ContactUs from '../Contact/ContactUs';
import Footer from '../Footer/Footer';

const Study = () => {
  return (
    <div className='mainServicesContainer'>
        <div className='container'>
            <h1>Global Study Pathways</h1>
        </div>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Study;