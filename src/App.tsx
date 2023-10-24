import React from 'react';
import logo from './logo.svg';
import './App.css';

import Hero from './components/Hero'
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Section6 from './components/Section6';
import FooterMenus,{FooterMenuData} from './components/FooterMenus';
function App() {

  const datamenu = [
    {
      h1: "Buyer",
      image: "/R Icon (1).png",
    },
    {
      h1: "Seller",
      image: "/R Icon (1).png",
    },
    {
      h1: "Investors",
      image: "/R Icon (1).png",
    },
    {
      h1: "Property Management",
      image: "/R Icon (1).png",
    },
    {
      h1: "",
      image: "_base.png",
    },
    {
      h1: "About",
      image: "/R Icon (1).png",
    },
    {
      h1: "Agents",
      image: "",
    },
  ];

  const data1 = [
    {
      h1: "About",
      image: "/Icon1.png",
    }
  ];
  const footMenus: FooterMenuData[] = [
    {
      p0: "Buyer",
      p: "Property Listings",
      p1: "Interactive Map",
      p2: "Monmouth Ocean MLS",
      p3: "Garden State MLS",
      p4: "Bright MLS",
      p5: "Forms",
    },
    {
      p0: "Seller",
      p: "Forms",
      p1: "Checklists",
      p2: "Selling Resources",
      p3: "Listing Photography",
      p4: "Sellers Disclosure Form",
      p5: ''
    },
    {
      p0: "Investor",
      p: "Investor Resources",
      p1: "501c3 Information",
      p2: "Donating a Property",
      p3: "Property Management ",
      p4: "Tax Attorney",
      p5: "Blog Articles",
    },
    {
      p0: "Information",
      p: "Testimonials",
      p1: "Contact Us",
      p2: "Careers",
      p3: "Agents ",
      p4: "About Us",
      p5: "Search",
    },
  
  ];


  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Hero background="/bghero.png"
          logo="./heroimg.png"
          datamenu={datamenu}
        />
      </div>

      <div>
        <Section1
          imageUrl="section1img.png"
          heading="Welcome to Mike Koen Realty"
          paragraph="With over 25+ Years of Experience as a Realtor and Licensed Builder, Mike offers a Wide Variety of Realty Services."
        />
      </div>
      <Section2 />

      <div >
        <h1 className='Heading'>Specialty Realty Services For Buyers, Sellers, and Investors.</h1>
      </div>
      <Section3 />

      <div>
        <Section4
          heading="Financing & Mortgage Options. "
          paragraph="Every family is unique when it comes to financing. Let us help guide you through the lending process and find the best rate."
        />
      </div>
      <Section5 />

      <div >
        <h1 className='Heading1'>Explore The Beautiful Jersey Shore</h1>
      </div>
      <div >
        <img src="jerseyimg.png" alt=""  className='jersey-shore' />
      </div>

      <Section6 />
      <div className="makekoenHeadingAndImg">
      <h1 className='Heading2'>MIKE KOEN</h1>
      <p className='paragraph'>New Jersey Licensed Builder. </p>
      </div>


      <FooterMenus footMenus={footMenus} />
    </>

  );
}

export default App;
