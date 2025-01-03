import React from "react";
import "./footer.css";
import {
  FaClock,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebook,
  FaInstagram,
  FaMap,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo">
          <img
            src="./Website_Logo/Dry_Dock_Logo_Black.png"
            alt="Dry Dock Bistro Logo"
            className="footer-logo-img"
          />
        </div>
        {/* Location Section */}
        <div className="footer-location-map">
          
        {/* Hours Section */}
        <div className="footer-section">
          <FaClock className="footer-icon" />
          <b>Hours</b>
          <p className="subheader-text">
            Mon.-Fri. 6:30 AM - 4:00 PM
            <br />
            Sat. 7:00 AM - 2:00 PM
          </p>
        </div>
          
           {/* Contact Section */}
        <div className="footer-section">
          <FaPhoneAlt className="footer-icon" />
          <b>Contact</b>
          <p>
            Phone: (862) 300-3307
            <br />
            Email:{" "}
            <a href="mailto:DryDockBistro7@gmail.com" className="footer-link">
              DryDockBistro7@gmail.com
            </a>
          </p>
          <div className="space-after-contact"> </div>
           {/* Social Media Section */}
        <div className="footer-social">
          <a
            href="https://www.facebook.com/p/Dry-Dock-Bistro-100068452192971/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="social-icon" />
          </a>
          <a
          href="https://www.twitter.com//"
          target="_blank"
          rel="noopener noreferrer"
          >
          <i className="fab fa-x-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/explore/locations/109369407078722/dry-dock-bistro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="social-icon" />
          </a>
          <a
            href="https://maps.app.goo.gl/mAEXTjh6KBgv3UrQ8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMap className="social-icon" />
          </a>
        </div>
        </div>
        <div className="footer-section">
            <FaMapMarkerAlt className="footer-icon" />
            <b>Location</b>
            <p>
              78 John Miller Way
              Kearny, NJ 07032
              <br />
              (Kearny Point)
            </p>
          </div>
          <div className="footer-map">
            <iframe
              title="Dry Dock Bistro Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1234567890!2d-74.123456789!3d40.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254c123456789%3A0x123456789abcdef!2s78%20John%20Miller%20Way%2C%20Kearny%2C%20NJ%2007032!5e0!3m2!1sen!2sus&disable=feature:poi|feature:transit"
              width="200"
              height="120"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
          <div className="vertical-line"> </div>
           {/* Delivery Section */}
        <div className="delivery-section">
          <p className="delivery-text">
            Enjoy your favorites delivered right to your door!
          </p>
          <div className="logos">
            <img
              src="./Footer/UberLogo.png"
              alt="Uber Eats Logo"
              className="delivery-logo"
            />
            <img
              src="./Footer/DoorLogo.png"
              alt="DoorDash Logo"
              className="delivery-logo"
            />
          </div>
        </div>
        </div>
        
      
      </div>
    </footer>
  );
};

export default Footer;
