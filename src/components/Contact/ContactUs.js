import React, { useState, useEffect, useRef } from "react";
import "./ContactUs.css";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FaceIcon from "@mui/icons-material/Face";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import MessageIcon from "@mui/icons-material/Message";
import TimerIcon from "@mui/icons-material/Timer";
import PhoneIcon from "@mui/icons-material/Phone";

const ContactUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="contactSection">
      <div className="contactContent">
        <h2>TALK TO OUR CAREER EXPERTS</h2>
        <h1>Please Feel Free To Contact Us</h1>
        <div className="timing">
          <TimerIcon className="clockIcon" />
          <h3>Mon - Sun (9:00 AM to 8:00 PM)</h3>
        </div>
        <p>
          Choosing the right career path can feel overwhelming. Our experienced
          counselors are here to guide you through this journey, offering expert
          advice tailored to your goals and aspirations. Explore your career
          options with confidence and clarity through our supportive counseling
          services. Our team is dedicated to helping you discover a career path
          that aligns perfectly with your ambitions and strengths. Take the
          first step toward a fulfilling career by consulting with us today.
        </p>
        <div className="contactNumberContainer">
          <div className="iconContainer">
            <PhoneIcon className="phoneIcon" />
          </div>
          <div className="contactNumber">
            <div className="contactNameAndNo">
              <h3>Director: Nabiha Noor</h3>
              <h3>0315-7225955</h3>
            </div>
            <div className="contactNameAndNo">
              <h3>Senior Consultant: Ayesha Kaleem</h3>
              <h3>0313-4018857</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="contactFormContainer">
        <div
          className={`contactFrom ${isVisible ? "visible" : ""}`}
          ref={sectionRef}
        >
          <h2>GET IN TOUCH WITH OUR EXPERTS!</h2>
          <form className="contactForm">
            <div className="username">
              <FaceIcon />
              <input type="text" placeholder="Enter Your Email" />
            </div>
            <div className="email">
              <MailOutlineIcon />
              <input type="email" placeholder="Enter Your Email" />
            </div>
            <div className="phoneno">
              <PhoneAndroidOutlinedIcon />
              <input type="number" placeholder="Enter Phone No" />
            </div>
            <div className="message">
              <MessageIcon />
              <textarea placeholder="Message(Optional)" rows={4} />
            </div>
            <button className="contactBtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
