import React from 'react';
import './menu.css';

const SoupSaladMenu = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="menu-section-header">Soup & Salads</div>
      <div className="food-header">
      Soup of The Day
        <span className="food-header-price">P/A</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span></span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Chicken Broth 
      </div>
      <div className="food-option">
        <span>With Rice or Matzo Ball   </span>
        <span className="food-price">$6.00</span>
      </div>
    {/*Food Header*/}
      <div className="food-header">
      Downtown House Salad 
      </div>
      <div className="food-option">
        <span>Mixed greens with grapes tomato and English cucumber   </span>
        <span className="food-price">$8.00</span>
      </div>
      <div className="food-option">
        <span>With grilled vegetables  </span>
        <span className="food-price">$9.75</span>
      </div>
      <div className="food-option">
        <span>With grilled organic chicken    </span>
        <span className="food-price">$10.75</span>
      </div>
      <div className="food-option">
        <span>With grass-fed flat iron steak   </span>
        <span className="food-price">$14.00</span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Caesar Salad
      </div>
      <div className="food-option">
        <span>Romain, parmesan, Caesar dressing & garlic flavored crouton   </span>
        <span className="food-price">$9.00</span>
      </div>
      <div className="food-option">
        <span>With organic grilled chicken </span>
        <span className="food-price">$11.00</span>
      </div>
      <div className="food-option">
        <span>With grass-fed flat iron steak    </span>
        <span className="food-price">$14.00</span>
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Greek Salad
      </div>
      <div className="food-option">
        <span>Mixed greens, grape tomato, seedless Cucumber, olives & feta       </span>
        <span className="food-price">$9.25</span>
      </div>
      <div className="food-option">
        <span>With organic grilled chicken </span>
        <span className="food-price">$11.00</span>
      </div>
         {/*Food Header*/}
         <div className="food-header">
         Chefs Salad
      </div>
      <div className="food-option">
        <span>House salad with cold cuts, Swiss & hard boiled eggs </span>
        <span className="food-price">$11.00</span>
      </div>
    </div>
  );
};

export default SoupSaladMenu;
