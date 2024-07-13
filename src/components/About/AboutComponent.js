import React from "react";
import introduction from "../../images/introduction.png";
import "./AboutComponent.css";
import { useNavigate } from "react-router-dom";

const AboutComponent = () => {
  const navigate = useNavigate();

  const aboutBtnHandler = () => {
    navigate("/about");
  };

  return (
    <div className="aboutSection">
      <div className="aboutContentContainer">
        <h1 className="aboutHeading">About Us</h1>
        <p className="aboutText">
          Paramount Consultants Pvt Ltd is committed to being a specialized
          provider of Student Visa, Visit Visas, and Immigration Consultancy, in
          the UK, USA, Canada, Australia, and Europe. We provide visa
          Consultancy services to students to secure their admission globally.
          we will help you choose your country of destination, help you to know
          the procedure, and guarantee your admission to Top universities in
          Australia, The UK, Canada, The USA, or Ireland. moreover, we offer
          Immigration for Canada, and Australia to all professionals seeking a
          better future. Also Business Immigration opportunities for investors
          seeking growth and expansion, and Schengen, USA, UK, Canada, and
          Australia Visit Visa Consultancy services to travel the world.
        </p>
      </div>
      <div className="aboutImageContainer">
        <img src={introduction} alt="about" className="aboutImage" />
      </div>
    </div>
  );
};

export default AboutComponent;
