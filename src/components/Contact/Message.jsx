import React from 'react';
import "./Message.css";
import message from "../../images/message.png";

const Message = () => {
  return (
    <div className="messageFromFounder">
        <div className="messageImageContainer">
          <img src={message} alt="message" className="messageImage" />
        </div>
        <div className="aboutMessage">
          <h1>Message From Director</h1>
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
  )
}

export default Message;