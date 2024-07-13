import React from 'react';
import Destination from './Destination';
import ContactUs from '../Contact/ContactUs';
import Footer from '../Footer/Footer';

const Europe = () => {
  return (
    <div style={{width: "100%"}}>
        <Destination title="Europe"/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default Europe;