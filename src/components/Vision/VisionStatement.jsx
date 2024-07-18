import React from "react";
import "./VisionStatement.css";
import ContactUs from "../Contact/ContactUs";
import Footer from "../Footer/Footer";
import Vision from "./Vision";

const VisionStatement = () => {
  return (
    <div className="mainVisionContainer">
      <Vision/>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default VisionStatement;
