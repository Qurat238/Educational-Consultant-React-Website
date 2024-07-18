import React from "react";
import "./DestinationComponent.css";

const DestinationComponent = () => {
  return (
    <div className="destinationComponentContainer" id="destination">
      <h1>Destinations</h1>
      <p className="destinationComponentText">
        At Paramount Consultants, we guide students toward their educational
        dreams with personalized advice and support for studying in some of the
        world's most prestigious and diverse regions. Our expert consultants
        provide tailored guidance for each of the following destinations:
      </p>
      <div className="destinationServicesContainer">
      <div className="destinationServices">
        <div className="destinationService">
          <h2>1. UK</h2>
        </div>
        <div className="destinationService">
          <h2>2. USA</h2>
        </div>
        <div className="destinationService">
          <h2>3. TURKEY</h2>
        </div>
      </div>
      <div className="destinationServices">
        <div className="destinationService">
          <h2>4. CANADA</h2>
        </div>
        <div className="destinationService">
          <h2>5. AUSTRALIA</h2>
        </div>
      </div>
      </div>
    </div>
  );
};

export default DestinationComponent;
