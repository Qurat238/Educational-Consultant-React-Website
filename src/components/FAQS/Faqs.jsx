import React from "react";
import "./Faqs.css";
import FaqComponent from "./FaqComponent";

const Faqs = () => {

  const FAQS = [
    {
      i: 1,
      question: "How Paramount Consultants Support Students?",
      small: "first",
      answer:"At Paramount Consultants in Pakistan, we exceed expectations in serving our students. From securing accommodations to facilitating job placements, our commitment extends through every step. We firmly believe our students are not just clients but the future of our nation, deserving only the finest services available.",
    },
    {
      i: 2,
      question: "How We Assist Students with Their Admission?",
      small: "second",
      answer:"We assist students in securing admissions to top-ranked universities worldwide, facilitating their higher education journey by securing partial scholarships and preparing them thoroughly for university and visa interviews.",
    },
    {
      i: 3,
      question: "What makes guidance essential for studying abroad?",
      small: "third",
      answer:"Understanding that every student comes with a unique educational background, we prioritize offering fully customized guidance. During our sessions, we inquire about their dream university and preferred courses, gathering essential information to provide thorough guidance throughout every step of the process.",
    },
    {
      i: 4,
      question: "What support do you provide for visa applications?",
      small: "forth",
      answer:"Paramount Consultants offer guidance on visa requirements, documentation preparation, application submission, and interview preparation (if required). They ensure students understand the visa process and comply with immigration regulations."
    },
    {
      i: 5,
      question: "How do you help students with scholarship and financial aid applications?",
      small: "fifth",
      answer:"Paramount Consultants assist students in identifying scholarships, grants, and financial aid opportunities based on their academic profile and financial need. They provide guidance on application requirements, deadlines, and submission procedures.",
    },
  ];

  return (
    <div className="fAQSection">
      <h1>FAQ'S</h1>
      <div className="fAQContainer">
        {FAQS && FAQS.map((faq) => <FaqComponent key={faq.i} faq={faq} />)}
      </div>
    </div>
  );
};

export default Faqs;
