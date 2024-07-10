import React from 'react';
import "./TestimonialComponent.css";

const TestimonialComponent = ({testimonial}) => {

  return (
    <div className="testimonial">
      <p>{testimonial.message}</p>
      <div className="user">
        <div className="avatar">
          <h1>{testimonial.letter}</h1>
        </div>
        <div className="userInfo">
          <h2 className="name">{testimonial.name}</h2>
          <h3 className="status">{testimonial.status}</h3>
        </div>
      </div>
    </div>
  )
}

export default TestimonialComponent;