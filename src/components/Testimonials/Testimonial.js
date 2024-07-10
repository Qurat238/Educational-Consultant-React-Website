import React from "react";
import "./Testimonial.css";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import TestimonialComponent from "./TestimonialComponent";

const Testimonial = () => {

  const testimonials = [
    {
      name: "Fatima Rahman",
      status: "Student",
      letter: "F",
      message: "Paramount Consultants has been instrumental in shaping my academic path with their exceptional guidance. Their counselors are not only highly knowledgeable but also make sure that every student receives personalized attention. Being part of Paramount's network felt like being part of a family where success is not just encouraged but nurtured."
    },
    {
      name: "Ibrahim Hassan",
      status: "Student",
      letter: "I",
      message: "Having been guided by Paramount Consultants, my academic journey has been nothing short of transformative. From the outset, their unwavering commitment to my success was evident. Their team of counselors care about each student's aspirations."
    },
    {
      name: "Amir Malik",
      status: "Student",
      letter: "A",
      message: "Paramount surpassed all my expectations in facilitating my admission process for studying abroad. Their transparent approach, combined with personalized guidance, made the entire experience seamless. From providing insightful advice on universities to navigating transparent visa procedures, their comprehensive support proved invaluable."
    },
    {
      name: "Imran Khan",
      status: "Student",
      letter: "I",
      message: "The staff is exceptionally helpful, guiding you through every step of the process. Furthermore, their support extends beyond securing the visa; they also assist with university clearance and more. My experience with Paramount has been excellent, and I am deeply grateful to the entire team for making my dream a reality."
    },
    {
      name: "Zahra Abbas",
      status: "Student",
      letter: "Z",
      message: "Paramount stands out as a beacon of excellence in educational consultancy. Their counselors combine extensive expertise with a genuine commitment to student welfare and success. From application advice to ongoing support, Paramount's personalized approach made me feel confident and supported every step of the way."
    },
    {
      name: "Zaid Ali",
      status: "Student",
      letter: "Z",
      message: "Choosing Paramount was one of the best decisions I made for my educational journey. Their counselors are not only experts in navigating the complexities of international admissions but also deeply invested in each student's success. Their dedication and personalized guidance ensured that I not only secured admission but also thrived in my chosen academic path."
    },
  ];

  const nextHandler = () => {
    let testimonialsContainer = document.getElementById(
      "testimonialsContainer"
    );
    testimonialsContainer.style.scrollBehavior = "smooth";
    
    let childWidth = testimonialsContainer.scrollWidth / testimonialsContainer.childElementCount;
    let scrolledWidth = testimonialsContainer.scrollLeft + testimonialsContainer.clientWidth;
    if (scrolledWidth >= testimonialsContainer.scrollWidth) {
      testimonialsContainer.scrollLeft = 0;
    } else {
      testimonialsContainer.scrollLeft += childWidth;
    }
  };

  const backHandler = () => {
    let testimonialsContainer = document.getElementById(
      "testimonialsContainer"
    );
    testimonialsContainer.style.scrollBehavior = "smooth";
    let childWidth = testimonialsContainer.scrollWidth / testimonialsContainer.childElementCount;
    let scrolledWidth = testimonialsContainer.scrollLeft + testimonialsContainer.clientWidth;
    if (scrolledWidth >= testimonialsContainer.scrollWidth) {
      testimonialsContainer.scrollLeft = 0;
    } else {
      testimonialsContainer.scrollLeft -= childWidth;
    }
  };

  return (
    <div className="testimonialsSection">
        <button className="leftArrow" onClick={backHandler}>
          <KeyboardArrowLeftIcon className="icon" />
        </button>
        <button className="rightArrow" onClick={nextHandler}>
          <KeyboardArrowRightIcon className="icon" />
        </button>
        <h1 className="testimonialsHeading">Testimonials</h1>
        <div className="testimonialsContainer" id="testimonialsContainer">
          {testimonials && testimonials.map((testimonial) => <TestimonialComponent key={testimonial.name} testimonial={testimonial}/>)}
        </div>
      </div>
  );
};

export default Testimonial;