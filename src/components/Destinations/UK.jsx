import React from 'react';
import Destination from './Destination.jsx';
import ContactUs from '../Contact/ContactUs';
import Footer from '../Footer/Footer';

const UK = () => {
  return (
    <div style={{width: "100%"}}>
        <Destination title="UK"/>
        <ContactUs/>
        <Footer/>
    </div>
  )
}

export default UK;