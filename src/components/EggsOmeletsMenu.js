import React from 'react';
import './menu.css';

const EggsOmeletsMenu = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="menu-section-header">3-Egg Omelets</div>
      <div className="food-header">
        Cheese Omelet  
        <span className="food-header-price">$7.75</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span></span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
         Peppers & Onion Omelet 
        <span className="food-price">$8.25</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
      {/*Food Header*/}
      <div className="food-header">
        Greek Omelet
      </div>
      <div className="food-option">
        <span>with spinach, onion, olives & feta  </span>
        <span className="food-price">$9.75</span>
      </div>
          {/*Food Header*/}
      <div className="food-header">
         NY Corned Beef Omelet  
        <span className="food-price">$10.00</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
      {/*Food Header*/}
      <div className="food-header">
            Western Omelet     
        <span className="food-price">$9.00</span>
       </div>
      <div className="food-option">
        <span></span>      
      </div>
            {/*Food Header*/}
      <div className="food-header">
         grilled Veggie & Goat 
        <span className="food-price">$8.75</span>
       </div>
      <div className="food-option">
        <span></span>      
      </div>
             {/*Food Header*/}
      <div className="food-header">
      Fresh Mushroom        
        <span className="food-price">$9.00</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Smoked Salmon       
        <span className="food-price">$12.00</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Flat Iron Steak      
        <span className="food-price">$12.00</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
    </div>
  );
};

export default EggsOmeletsMenu;
