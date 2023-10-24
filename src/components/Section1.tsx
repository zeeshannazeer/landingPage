import React from 'react';


interface Section1 {
    imageUrl: string;
    heading: string;
    paragraph: string;
  }

function Section1(props:Section1) {
  return (
    <div className='S1'  >
      <div style={{width:'40%'}}>
        <img src={props.imageUrl} alt="My Image" />
      </div>
      <div style={{width:'40%' ,textAlign:'center'}}>
        <h4>{props.heading}</h4>
        <p>{props.paragraph}</p>
      </div>
    </div>
  );
}

export default Section1;
