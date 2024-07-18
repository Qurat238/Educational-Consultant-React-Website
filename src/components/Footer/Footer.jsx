import React, { useEffect, useRef, useState } from "react";
import "./Footer.css";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationIcon from "@mui/icons-material/LocationCity";
import MailIcon from "@mui/icons-material/Mail";
import logo from "../../images/logo.jpeg";
import map from "../../images/map.png";

const Footer = () => {
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
    <div className="footerSection">
      <div className="mainFooterSection">
        <div className="footerFirstSection">
          <div className="footertwoSectionsContainer">
            <div className="footerContentContainer">
              <p>
                Paramount Consultants stands out as one of the fastest-growing
                education and career networks in Pakistan.
              </p>
              <img src={logo} alt="Logo" className="footerLogo" />
            </div>

            <div className="footerQuickLinksContainer">
              <h2>Get In Touch</h2>
              <div className="links">
                <div className="address">
                  <LocationIcon />
                  <p>
                    Paramount international school, PUEHS Town, 2 Raiwind Rd,
                    Ali Razabad, Lahore, Pakistan
                  </p>
                </div>
                <div className="mail">
                  <MailIcon />
                  <p>query.paramountconsultants@gmail.com</p>
                </div>
                <div className="phone">
                  <PhoneIcon />
                  <div>
                    <p>0305-4891911</p>
                    <p>0315-7225955</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footerMapContainer">
            <img src={map} alt="map" className="mapImage" />
          </div>
        </div>
      </div>
      <div className="miniFooterSection">
        <div className="termsCondition">
          <a>Privacy And Policy |</a>
          <a>Terms And Conditions</a>
        </div>
        <div className="copyright">
          <a>© Paramount |</a>
          <a>All Right Reserved</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
