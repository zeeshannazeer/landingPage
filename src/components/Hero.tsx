
import React, { useState } from 'react'

interface HeroProps {
  background: string;
  logo: string;
  className?: string;
  datamenu: { h1: string; image: string }[]; // Add datamenu prop
}

const Hero: React.FC<HeroProps> = ({ background, logo, className, datamenu }) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const filteredDataMenu = datamenu.filter((item) => item.h1 !== '' || item.image !== '');

  const navbarStyle = {
    background: `url(${background}) no-repeat`,
    width: '100%',
    height: '600px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    maxWidth: '100%',
  };

  return (
    <>


      <div style={navbarStyle} className='hero'>

        <nav className={`navbar ${className}`}>
          <div className="nav d-flex m-auto align-items-center p-0" style={{ gap: "2rem" }}>
            <img className='m-0 p-0' src={logo} alt="" />
            <div className="animated-bar" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div>
              <ul className={`mt-3 menu d-flex text-white ${showMenu ? 'show-menu' : ''}`}>
                {datamenu.map((item, index) => (
                  <li key={index} className="menu-item m-0 p-0" style={{ cursor: "pointer" }}>
                    <span className=''>{item.h1}</span>
                    <img src={item.image} alt="" className="dropdown-icon" />
                  </li>
                ))}
              </ul>
            </div>

            <button className='head-btn text-white font-fam m-0 p-0' style={{
              border: '2px solid white',
              background: 'transparent',
              borderRadius: '30px',
              width: "110px",
              height: "35px"
            }}>
              Contact
            </button>
          </div>
        </nav>


        <div className='header-bottom text-center' style={{ marginTop: "21rem", textAlign:'center' ,width:'100%'}}>
          <p className='font-fam text-white display-3 fw-lighter'>Find Your Dream Home</p>
          <button className='text-white font-fam' style={{
            border: '2px solid white',
            background: 'transparent',
            borderRadius: '30px',
            width: "150px",
            height: "50px"
          }}>
            Get Started
          </button>
        </div>

      </div>

    </>
  );
};

export default Hero
