import React from 'react';
// import './menu.css';

const SmokedFishCatering = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="catering-header">SMOKED FISH</div>
      <hr className="menu-line" />
      <div className="food-header">
      Full Size Bagels with Cream Cheese
      </div>
      {/*Food Options*/}
      <div className="food-option">
        <span></span>
      </div>
      <div className="food-option">
        <span></span>
      </div>
         {/*Food Header*/}
      <div className="food-header">
      Freshly Sliced Nova Lox Smoked Salmon
      </div>
      <div className="food-option">
        <span></span>      
      </div>
        {/*Food Header*/}
        <div className="food-header">
        Smoked White Fish Salad
      </div>
      <div className="food-option">
        <span></span>      
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Tray of sliced Jersey Tomato & Sweet Vidalia Onion
      </div>
      <div className="food-option">
        <span></span>      
      </div>
    </div>
  );
};

export default SmokedFishCatering;
