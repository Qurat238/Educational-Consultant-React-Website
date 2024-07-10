import React, {useState, useEffect, useRef} from "react";
import "./Services.css";

const Services = () => {

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
    <div className="servicesContainer">
      <h1>Our Services</h1>
      <p className="servicesText">
        Paramount provides a wide range of services to support you with your
        international migration or educational journey. If you are dreaming of
        moving or studying overseas, Paramount will get you there. From visa
        information to career advice, we are dedicated to you and your
        international future.
      </p>
      <div  className={`services ${isVisible ? "visible" : ""}`} ref={sectionRef}>
        <div className="service">
          <h2>1. Study Abroad</h2>
        </div>
        <div className="service">
          <h2>2. Visit and Business Tours</h2>
        </div>
        <div className="service">
          <h2>3. Immigration Services</h2>
        </div>
      </div>
    </div>
  );
};

export default Services;
