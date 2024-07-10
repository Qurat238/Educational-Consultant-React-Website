import React from "react";
import "./WhatWeDo.css";
import map from "../../images/map.png";

const WhatWeDo = () => {
  return (
    <div className="whatWeDoContainer">
      <div className="whatWeDoImageContainer">
        <img src={map} alt="Map Image" />
      </div>
      <div className="whatWeDoContentContainer">
        <h2>We Deal Around The Globe</h2>
        <p className="whatWeDoText">
          Moving abroad can be a life-changing experience, and these popular
          countries are emerging as a popular destinations for young aspiring
          students seeking quality education and a diverse cultural experience.
          Our goal is to offer outstanding services to students and individuals,
          enabling them to access quality education in foreign institutes at
          affordable prices, while also providing expert guidance to enrich
          their international experience.
        </p>
      </div>
    </div>
  );
};

export default WhatWeDo;
