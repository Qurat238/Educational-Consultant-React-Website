import React from 'react';
import "./about.css";
import AboutComponent from './AboutComponent';
import FAQS from '../FAQS/Faqs';
import Footer from '../Footer/Footer';
import OurMission from "../About/OurMission"
import Services from '../Services/Services';
import WhatWeDo from '../Services/WhatWeDo';

const about = () => {
  return (
    <div className='aboutMainContainer'>
      <AboutComponent/>
      <OurMission/>
      <Services/>
      <WhatWeDo/>
      <FAQS/>
      <Footer/>
    </div>
  )
}

export default about;