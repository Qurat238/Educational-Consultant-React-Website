import React from 'react';
import "./OurMission.css";
import mission from "../../images/mission.jpg";

const OurMission = () => {
  return (
    <div className='ourMissionContainer'>
      <div className="missionImage">
        <img src={mission} alt="Mission Image" />
      </div>
      <div className="missionContent">
        <p>Our mission is to deliver professional and tailored services to students or individuals aspiring to move abroad. We are committed to assisting students and their accompanying members in achieving their future career and academic goals with unwavering dedication and support.</p>
      </div>
    </div>
  )
}

export default OurMission;