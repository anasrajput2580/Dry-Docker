import React from "react";
import "./ContactForm.css"; // Import the CSS file
import { useNavigate } from 'react-router-dom';
const ContactForm = () => {
  const navigate = useNavigate();
  const handleSubs = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "52aebbf5-a418-4cca-b754-0409bd0365cc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        window.alert("Subscribed Successfully");
        event.target.reset();
        navigate('/thank-you');
      } else {
        console.log("Error", data);
        window.alert(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      window.alert("Network error. Please check your connection and try again.");
    }
  };
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
        <form onSubmit={handleSubs}>
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
