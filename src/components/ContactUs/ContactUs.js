import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const ContactUs = () => {
  // Media Queries
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="banner">
      {/* Menu Section */}
      <nav className={`navbar ${isMobile ? 'navbar-mobile' : ''}`}>
        <ul className={`menu ${isMobile ? 'menu-mobile' : isTablet ? 'menu-tablet' : ''}`}>
          <li>
          <NavLink to="/" activeClassName="active-link">Menu</NavLink>
          </li>
          <li>
          <NavLink to="/side-menu" activeClassName="active-link">Side Menu</NavLink>
          </li>
          <li>

            <NavLink to="/caterings" activeClassName="active-link">Catering</NavLink>
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
          src="./Website_Logo/DryDockMenu.png" // Replace with the actual path to your logo
          alt="Dry Dock Bistro Logo"
          className="logo"
        />
      </div>
    </div>
   
  );
};

export default ContactUs;


