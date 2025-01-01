import React from 'react';
import './ThankYou.css';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
    FaMap
  } from "react-icons/fa";
const ThankYou = ({ title, line1, line2, line3 }) => {
  // Define breakpoints
  // Media Queries
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="banner-ty">
      {/* Menu Section */}
      <nav className={`navbar-ty ${isMobile ? "navbar-mobile" : ""}`}>
               <div className="logo-ty">
          <a href="/" className="home-button-ty">
            <img src="/Website_Logo/Dry_Dock_Logo_Black.png" alt="Logo" className="logo-img-ty" />
          </a>
        </div>
              <ul className={`menu ${isMobile ? "menu-mobile" : isTablet ? "menu-tablet" : ""}`}>
                <li>
                  <NavLink to="/" activeClassName="active-link">
                    Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/side-menu" activeClassName="active-link">
                    Side Menu
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/caterings" activeClassName="active-link">
                    Catering
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="active-link">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us" activeClassName="active-link">
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </nav>
      {/* Thank You Section */}
      <div className="thank-you-page">

        <div className="content-tick">
          <div className="green-tick"></div>
          <div className="ty-content"> <h1>{title}</h1>
          <p>{line1}<br />{line2} <br/>{line3}</p>
          <hr className="j-line" />
          <div className="social-media">
            <p>Let’s connect!</p>
            <div className="social-icons-ty">
           <a href="https://www.facebook.com/p/Dry-Dock-Bistro-100068452192971/" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-facebook"></i>
           </a>
           <a href="https://" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-x-twitter"></i>
           </a>
           <a href="https://www.instagram.com/explore/locations/109369407078722/dry-dock-bistro/" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-instagram"></i>
           </a>
          
            <a
                   href="https://maps.app.goo.gl/mAEXTjh6KBgv3UrQ8"
                   target="_blank"
                   rel="noopener noreferrer"
                 >
                   <FaMap className="social-icon-map" />
                 </a>
           </div>
          </div>


          </div>
        

         
        </div>
      
      </div>
        
    </div>
  );
};

export default ThankYou;
