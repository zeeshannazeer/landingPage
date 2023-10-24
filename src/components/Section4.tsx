import React from 'react';


interface Section4 {

    heading: string;
    paragraph: string;
}

function Section4(props: Section4) {
    return (
        <div className='S1'  >

            <div style={{ width: '50%', textAlign: 'center' }}>
                <h2 style={{
                    color: ' #454545',
                    fontFamily: 'sans-serif',
                    fontWeight: 'lighter',
                    fontSize: '35px'
                }}>{props.heading}</h2>
                <p style={{
                    color: ' #454545',
                    fontFamily: 'sans-serif',
                    fontWeight: 'lighter',
                    fontSize: '15px'
                }}>{props.paragraph}</p>
            </div>
            <div style={{ width: '15%' }}>
                <button className='text-white font-fam' style={{
                    border: '2px solid white',
                    background: 'transparent',
                    borderRadius: '30px',
                    backgroundColor: ' #98002E',
                    width: "150px",
                    height: "55px",
                    fontSize:'18px'
                }}>
                    Chat Now
                </button>
            </div>
        </div>
    );
}

export default Section4;
