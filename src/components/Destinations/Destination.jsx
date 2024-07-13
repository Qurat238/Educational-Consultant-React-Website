import React from 'react';
import "./Destination.css";

const Destination = ({title}) => {
  return (
    <div className='destinationContainer'>
        <h1>Study in {title}</h1>
    </div>
  )
}

export default Destination;