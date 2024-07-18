import React from "react";
import "./home.css";
import banner from "../../images/banner.png";
import AboutComponent from "../About/AboutComponent";
import ContactUs from "../Contact/ContactUs";
import FAQS from "../FAQS/Faqs";
import Footer from "../Footer/Footer";
import Blog from "../Blog/Blog";
import Testimonial from "../Testimonials/Testimonial";
import {useNavigate} from "react-router-dom";
import OurMission from "../About/OurMission";
import Services from "../Services/Services";
import Vision from "../Vision/Vision";
import DestinationComponent from "../Destinations/DestinationComponent";
import WhatWeDo from "../Services/WhatWeDo";
import ContactUsSecond from "../Contact/ContactUsSecond";
import Message from "../Contact/Message";

const Home = () => {

  const navigate = useNavigate();

  const homeBtnHandler = () => {
    navigate("/about");
  }

  return (
    <div className="homeContainer">

      {/* Home Section*/}
      <div className="bannerSection">
        <div className="imageContainer">
          <img src={banner} alt="Banner" className="bannerImage" />
        </div>
        <div className="contentContainer">
          <h2 className="homeSubHeading">Welcome to Paramount Consultants</h2>
          <h1 className="homeHeading">Start Your Journey to Global Educational Excellence</h1>
          <p className="homeText">
            Paramount Consultants stands out as a leading education consultancy in Pakistan, offering unparalleled opportunities for exploring global academic avenues. Benefit from tailored guidance and personalized support from our experts. Connect with us today to embark on your educational journey with confidence!
          </p>
          <button className="homeBtn" onClick={homeBtnHandler}>GET STARTED</button>
        </div>
      </div>

      <AboutComponent/>
      <OurMission/>
      <Services/>
      <Vision/>
      <DestinationComponent/>
      <WhatWeDo/>
      <Testimonial/>
      <ContactUs/>
      <Message/>
      <Blog/>
      <FAQS/>
      <ContactUsSecond/>
      <Footer/>
    </div>
  );
};

export default Home;
