import React from "react";
import "./ContactForm.css"; // Import the CSS file

const ContactForm = () => {
  return (
    <div className="contact-container">
      {/* Left Images Section */}
      <div className="images-section">
      <div className="image-item image-1">
        <img
          src="./Contact_Us/1.png"
          alt="Sandwiches"
        />
      </div>
      <div className="image-item image-2">
        <img
          src="./Contact_Us/2.png"
          alt="Shrimp"
        />
      </div>
      <div className="image-item image-3">
        <img
          src="./Contact_Us/3.png"
          alt="Tacos"
        />
      </div>
      <div className="image-item image-4">
        <img
          src="./Contact_Us/4.png"
          alt="Fruits"
        />
      </div>
    </div>

      {/* Form Section */}
      <div className="form-container">
        <h2>GET IN TOUCH WITH US</h2>
        <p>
          Fill out the form below or reach us by phone or email, and we’ll be
          happy to assist you.
        </p>
        <form>
          <label>NAME</label>
          <input type="text" placeholder="Your Name" />

          <label>EMAIL</label>
          <input type="email" placeholder="Your Email" />

          <label>PHONE NUMBER</label>
          <input type="text" placeholder="Your Phone Number" />

          <label>MESSAGE</label>
          <textarea placeholder="Additional information or requests"></textarea>

          <button type="submit">Send Message</button>
        </form>
        <p className="note">
          Please note: All information on this website, including menu items,
          prices, and hours, is subject to change without notice. For the most
          accurate information, please contact us directly at (862) 300-3307.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
