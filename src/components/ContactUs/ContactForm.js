import React from "react";
import "./ContactForm.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  const handleSubs = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", "de867d83-2fbe-46c2-9a1e-7eff4671652f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        window.alert("Your message has been sent successfully.");
        event.target.reset();
        navigate("/thank-you"); // Navigate to the thank-you page
      } else {
        console.error("Error:", data);
        window.alert(data.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      window.alert("Network error. Please check your connection and try again.");
    }
  };

  return (
    <div className="contact-container">
      {/* Left Images Section */}
      <div className="images-section">
        <div className="image-item image-1">
          <img src="./Contact_Us/1.png" alt="Sandwiches" />
        </div>
        <div className="image-item image-2">
          <img src="./Contact_Us/2.png" alt="Shrimp" />
        </div>
        <div className="image-item image-3">
          <img src="./Contact_Us/3.png" alt="Tacos" />
        </div>
        <div className="image-item image-4">
          <img src="./Contact_Us/4.png" alt="Fruits" />
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
          <label htmlFor="name">NAME</label>
          <input type="text" name="name" id="name" placeholder="Your Name" required />

          <label htmlFor="email">EMAIL</label>
          <input type="email" name="email" id="email" placeholder="Your Email" required />

          <label htmlFor="phone">PHONE NUMBER</label>
          <input type="text" name="phone" id="phone" placeholder="Your Phone Number" required />

          <label htmlFor="message">MESSAGE</label>
          <textarea
            name="message"
            id="message"
            placeholder="Additional information or requests"
            required
          ></textarea>

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
