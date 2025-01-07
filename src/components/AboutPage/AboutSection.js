import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-container">
      {/* Top Section */}
      <div className="top-banner">
        <h1>Where Every Bite is Full of Flavor</h1>
        <p>
          Your destination where culinary traditions
          bring joy to every bite. With a menu inspired by the rich heritage of American
          delis and infused with Mediterranean and Jewish flavors, we offer something
          special for everyone.
        </p>
        <p>
          From made-to-order cold deli sandwiches to hot wraps, gourmet burgers, Philly
          steaks, and fresh salads, our dishes are cooked with passion and high-quality
          ingredients. We also serve a variety of <strong>HALAL options</strong> to suit
          a range of tastes, such as beef bacon, chicken breast, wings, tenders, and some
          cold cuts.
        </p>
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="image-container">
          <img src="./About_Us/7.png" alt="Chef" />
        </div>
        <div className="text-container">
          <h2>Our Passion for Quality in Every Meal</h2>
          <p>
            At Dry Dock Bistro, every dish is made with the finest ingredients, ensuring
            that each bite is bursting with flavor. From the first slice of perfectly
            toasted bread to the last bite of our mouthwatering sandwiches, we don’t cut
            corners.
          </p>
          <p>
            We believe that great food starts with great ingredients, and our commitment
            to quality means you’ll taste the difference in every meal. Freshness, flavor,
            and passion are at the heart of everything we serve, making each dining
            experience memorable and satisfying.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
