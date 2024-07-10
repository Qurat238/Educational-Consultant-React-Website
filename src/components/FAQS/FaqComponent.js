import React, { useState, useEffect, useRef } from "react";
import "./FaqComponent.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const FaqComponent = ({ faq }) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [state, setState] = useState({ [`${faq.small}Clicked`]: false });

  const answerNonClickedHandler = () => {
    setState(!state);
    let answer = document.getElementById(`${faq.small}Answer`);
    let questionIcon = document.getElementById(`${faq.small}QuestionIcon`);
    answer.style.display = "block";
    questionIcon.style.rotate = "90deg";
  };
  const answerClickedHandler = () => {
    setState(!state);
    let answer = document.getElementById(`${faq.small}Answer`);
    let questionIcon = document.getElementById(`${faq.small}QuestionIcon`);
    answer.style.display = "none";
    questionIcon.style.rotate = "0deg";
  };

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
    <div className="fAQContent">
      <div className={`heading ${isVisible ? "visible" : ""}`} ref={sectionRef}>
        <h3>{faq.question}</h3>
        <KeyboardArrowRightIcon
          id={`${faq.small}QuestionIcon`}
          onClick={state ? answerClickedHandler : answerNonClickedHandler}
        />
      </div>
      <p id={`${faq.small}Answer`}>{faq.answer}</p>
    </div>
  );
};

export default FaqComponent;
