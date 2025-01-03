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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.1234567890!2d-74.123456789!3d40.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254c123456789%3A0x123456789abcdef!2s78%20John%20Miller%20Way%2C%20Kearny%2C%20NJ%2007032!5e0!3m2!1sen!2sus!4v1691234567890!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Content Section */}
      <div className="content-section">
        {/* Hours Section */}
        <div className="hours-section">
          <h2>Our Hours of Operation</h2>
          <ul>
            <li>Monday to Friday: 6:30 AM - 4:00 PM</li>
            <li>Saturday: 7:00 AM - 2:00 PM</li>
          </ul>
          <p>
            Our operating hours may vary on holidays or special occasions. Please call us at{" "}
            <a href="tel:+18623003307" className="contact-number">
              (862) 300-3307
            </a>{" "} to confirm hours of operation.
          </p>
        </div>

        {/* Delivery Section */}
        <div class="delivery-section">
          <p class="delivery-text">Enjoy your favorites delivered right to your door!</p>
        <div class="logos">
          <img src="./Footer/UberLogo.png" alt="Delivery Logo 1" class="delivery-logo" />
        </div>
        <div class="logos">
          <img src="./Footer/DoorLogo.png" alt="Delivery Logo 2" class="delivery-logo" />
        </div>
        </div>

      </div>
    </div>
  );
};

export default HoursOfOperation;
