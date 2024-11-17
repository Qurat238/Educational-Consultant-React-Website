import React from "react";
import "./SuccessStoryComponent.css";
import graduation from "../../images/graduation.png";
import Graduation2 from "../../images/Graduation2.jpg";
import congratulation from "../../images/congratulation.jpg";

const SuccessStoryComponent = ({ successstory }) => {

  return (
    <div className="successStory">
      <div className="successStoryImageContainer">
        <img src={congratulation} alt="Congratulation" className="congratulationImage" />
        {successstory.gender === "female" ? <img src={Graduation2} alt="Graduation" className="graduationImage" /> : <img src={graduation} alt="Graduation" className="graduationImage" />}
      </div>
      <div className="successStoryContent">
        <h1 className="successStoryName">{successstory.name}</h1>
        <p className="successStoryUniversity">{successstory.university}</p>
        <p className="successStoryParagraph">{successstory.text}</p>
      </div>
    </div>
  );
};

export default SuccessStoryComponent;
