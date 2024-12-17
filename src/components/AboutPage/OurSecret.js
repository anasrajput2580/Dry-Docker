import React from "react";
import "./OurSecret.css"; // Import CSS for styling

const OurSecret = () => {
    return (
        <div className="bistro-container">
          {/* Background Image Section */}
          <div
            className="bistro-header"
            style={{ backgroundImage: "url('./About_Us/5.png')" }} // Path to public folder
          >
            <div className="overlay">
              <div className="header-content">
                {/* Left Side Heading */}
                <div className="content-left">
                  <h1>Our Secret That<br/> Makes Dry Dock<br/> Bistro Special</h1>
                </div>
                {/* Right Side Paragraphs */}
                <div className="content-right">
                  <p>
                    Chef Mamy, a native New Yorker, began <b>his</b> culinary journey
                    as a general manager in New York City in the 1990s. After moving
                    to New Jersey, he managed renowned establishments like Jon & Luis
                    Steak House in Woodcliff Lake and America Bar & Restaurant in
                    Tenafly.
                  </p>
                  <p>
                    In 2004, he founded Deli, dedicating 20 years to creating dishes
                    with passion and fresh, high-quality ingredients. Her hands-on
                    approach and love for food inspire every meal served at Dry Dock
                    Bistro.
                  </p>
                </div>
              </div>
            </div>
          </div>
    
          {/* Footer Section */}
          <div className="bistro-footer">
            <ul className="bistro-list">
              <li>
                <span className="checkmark">✔</span> The menu items, prices, and
                availability listed on this website are subject to change without
                notice.
              </li>
              <li>
                <span className="checkmark">✔</span> We take care to prepare all meals
                with the highest quality and safety standards. However,
                cross-contamination of allergens may occur in our kitchen. Please
                inform us of any dietary restrictions or allergies before placing
                your order.
              </li>
              <li>
                <span className="checkmark">✔</span> We do not currently offer delivery
                services. Any third-party delivery options are managed by independent
                providers, and we are not responsible for their actions or fees.
              </li>
            </ul>
          </div>
        </div>
      );
    };

export default OurSecret;
