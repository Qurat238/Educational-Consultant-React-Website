import React from "react";
import "./ContactUsSecond.css";
import contactImage from "../../images/contact.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const ContactUsSecond = () => {
  return (
    <div className="contactUs">
      <div className="contactUsImageContainer">
        <img src={contactImage} alt="contact" className="contactUsImage" />
      </div>
      <div className="contactUsContentContainer">
        <h1>Contact Us</h1>
        <p>
          Meet our highly trained team for free guidance, counselling and
          submission of your application on the spot. Once you have submitted
          your application, you can book your next appointment with the
          University’s Admission Team on their next visit or through conference
          calls at the nearest HR Office.
        </p>
        <div className="socialMediaIcons">
          <a href="https://www.linkedin.com/company/theparamount-consultants/" className="subIconBtn">
            <LinkedInIcon />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61559209200406" className="subIconBtn">
            <FacebookIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSecond;
