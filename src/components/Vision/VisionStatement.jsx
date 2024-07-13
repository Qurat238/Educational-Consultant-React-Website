import React from "react";
import "./VisionStatement.css";
import ContactUs from "../Contact/ContactUs";
import Footer from "../Footer/Footer";

const VisionStatement = () => {
  return (
    <div className="mainVisionContainer">
      <div className="visionContainer">
        <h1>Our Vision for Success</h1>
        <p>
          Our vision is to empower students to unlock their future
          possibilities through comprehensive and personalized educational
          consulting. We believe in equipping every student with the tools,
          resources, and confidence needed to thrive in their academic and
          professional lives. By offering innovative strategies and unwavering
          support, we aim to shape a brighter future for each individual we
          serve.
        </p>
      </div>
      <ContactUs/>
      <Footer/>
    </div>
  );
};

export default VisionStatement;
