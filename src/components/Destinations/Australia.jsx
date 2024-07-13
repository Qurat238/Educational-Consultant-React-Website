import React from 'react';
import Destination from './Destination';
import ContactUs from '../Contact/ContactUs';
import Footer from '../Footer/Footer';

const Australia = () => {
  return (
    <div style={{width: "100%"}}>
        <Destination title="Australia"/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Australia;