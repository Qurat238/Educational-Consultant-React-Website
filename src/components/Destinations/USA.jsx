import React from 'react';
import Destination from './Destination';
import ContactUs from '../Contact/ContactUs';
import Footer from '../Footer/Footer';

const USA = () => {
  return (
    <div style={{width: "100%"}}>
        <Destination title="USA"/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default USA;