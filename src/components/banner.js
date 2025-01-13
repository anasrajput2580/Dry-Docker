import React, { useEffect, useRef } from "react";
import "./banner.css";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Banner = ({ videoSrc, title, subtitle }) => {
  // Media Queries
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // Ref to access video element
  const videoRef = useRef(null);

  // Set playback rate when the component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0; // Set the desired playback rate
    }
  }, []);

  return (
    <div className="banner">
      {/* Navigation Menu */}
      <nav className={`navbar ${isMobile ? "navbar-mobile" : ""}`}>
        <ul
          className={`menu ${
            isMobile ? "menu-mobile" : isTablet ? "menu-tablet" : "menu-desktop"
          }`}
        >
          <li>
            <NavLink exact to="/" activeClassName="active-link">
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

      {/* Header Section */}
      <div className="header">
        <img
          src="./Website_Logo/DryDockMenu.png" // Replace with the actual path to your logo
          alt="Dry Dock Bistro Logo"
          className="logo"
        />
      </div>

      {/* Title Section */}
      <p className="statement">{title}</p>

      {/* Video Background */}
      <div className="video-container">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="video"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Banner;
