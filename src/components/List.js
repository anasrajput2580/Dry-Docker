import React from "react";
import "./AboutPage/OurSecret.css"; // Import the CSS file for styling

const List = () => {
  return (
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

  );
};

export default List;