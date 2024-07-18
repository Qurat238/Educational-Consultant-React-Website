import React from "react";
import "./contact.css";
import ContactUs from "./ContactUs";
import Faqs from "../FAQS/Faqs";
import Footer from "../Footer/Footer";
import ContactUsSecond from "./ContactUsSecond";
import Message from "./Message";

const contact = () => {
  return (
    <div className="contactMainContainer">
      <ContactUsSecond />
      <ContactUs />
      <Message/>
      <Faqs />
      <Footer />
    </div>
  );
};

export default contact;
