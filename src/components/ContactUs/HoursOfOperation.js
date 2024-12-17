import React from "react";
import "./HoursOfOperation.css";

const HoursOfOperation = () => {
  return (
    <div className="hours-container">
      {/* Map Section */}
      <div className="map-section">
        <iframe
          title="location-map"
          className="map-iframe"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509556!2d144.9537353159048!3d-37.81627974202112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57772c3c34588aa!2sGarden%20Grill%20%26%20Dry%20Dock%20Bistro!5e0!3m2!1sen!2sus!4v1634378404743!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Hours Section */}
      <div className="hours-section">
        <h2>Our Hours of Operation</h2>
        <ul>
          <li>Monday to Friday: 6:30 AM - 4:00 PM</li>
          <li>Saturday: 7:00 AM - 2:00 PM</li>
        </ul>
        <p>
          Our operating hours may vary on holidays or special occasions. Please
          call us at{" "}
          <a href="tel:+18623003307" className="contact-number">
            (862) 300-3307
          </a>{" "}
          to confirm hours of operation.
        </p>
      </div>
    </div>
  );
};

export default HoursOfOperation;
