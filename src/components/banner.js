import React from 'react';
import './banner.css';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const Banner = ({ videoSrc, title, subtitle }) => {
  // Media Queries
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="banner">
      {/* Menu Section */}
      <nav className={`navbar ${isMobile ? 'navbar-mobile' : ''}`}>
        <ul className={`menu ${isMobile ? 'menu-mobile' : isTablet ? 'menu-tablet' : ''}`}>
          <li>
          <NavLink to="/" activeClassName="active-link">Home</NavLink>
          </li>
          <li>

            <NavLink to="/catering" activeClassName="active-link">Catering</NavLink>
          </li>
          <li>
          <NavLink to="/about" activeClassName="active-link">About Us</NavLink>
          </li>
          <li>

            <NavLink to="/contact-us" activeClassName="active-link">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
      <div className="header">
        <img
          src="./Website_Logo/Dry_Dock_Logo_White.png" // Replace with the actual path to your logo
          alt="Dry Dock Bistro Logo"
          className="logo"
        />
      </div>
      <p className="statement">
        {title}
      </p>
      <div class="video-container">
           {/* Video Background */}
      <video autoPlay muted loop className="video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
   
  );
};

export default Banner;


