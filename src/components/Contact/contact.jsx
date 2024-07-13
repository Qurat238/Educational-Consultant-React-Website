import React from "react";
import "./contact.css";
import ContactUs from "./ContactUs";
import Faqs from "../FAQS/Faqs";
import Footer from "../Footer/Footer";
import ContactUsSecond from "./ContactUsSecond";
import message from "../../images/message.png";

const contact = () => {
  return (
    <div className="contactMainContainer">
      <ContactUsSecond />
      <ContactUs />
      <div className="messageFromFounder">
        <div className="messageImageContainer">
          <img src={message} alt="message" className="messageImage" />
        </div>
        <div className="aboutMessage">
          <h1>Message From Founder</h1>
          <p>
            Dear Students,
            <br />
            Hello and welcome to Paramount Consultants.
            <br />
            At Paramount Consultants, we pride ourselves on delivering
            personalized guidance tailored to your academic and career
            aspirations. Unlike others, we prioritize quality over quantity,
            ensuring each client receives dedicated attention and satisfaction
            throughout their journey.
            <br />
            Our mission extends beyond mere university selection and admissions.
            We are committed to facilitating a seamless transition for bright,
            ambitious students like you as you embark on your educational
            journey abroad.
            <br />
            Director,
            <br />
            Nabiha Noor,
            <br/>
            Paramount Consultants,
          </p>
        </div>
      </div>
      <Faqs />
      <Footer />
    </div>
  );
};

export default contact;
