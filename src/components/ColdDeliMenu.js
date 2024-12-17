import React from 'react';
import './menu.css';

const ColdDeliMenu = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="menu-section-header">Cold Deli Sandwiches</div>
      <div className="food-header">
      COLD DELI SANDWICH
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span>With lettuce, tomato & pickle</span>
      <span className="food-price">$.75</span>
      </div>
      <div className="food-option">
      <span>For cheese (for 8” Sub)</span>
      <span className="food-price">$2.00</span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Oven Gold Turkey 
        <span className="food-price">$7.75</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
          {/*Food Header*/}
      <div className="food-header">
      Honey Maple Turkey   
        <span className="food-price">$8.00</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
      {/*Food Header*/}
      <div className="food-header">
      London Broil Roast Beef      
        <span className="food-price">$9.00</span>
       </div>
      <div className="food-option">
        <span></span>      
      </div>
            {/*Food Header*/}
      <div className="food-header">
      Buffalo-Style Chicken Breast
        <span className="food-price">$8.00</span>
       </div>
      <div className="food-option">
        <span></span>      
      </div>
             {/*Food Header*/}
      <div className="food-header">
      Smoked Whitefish Salad     
        <span className="food-price">$9.00</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Chunky Organic Chicken Salad            
        <span className="food-price">$8.00</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Solid White Tuna Salad        
        <span className="food-price">$9.00</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
        {/*Food Header*/}
      <div className="food-header">
      Smoked Turkey Ham       
        <span className="food-price">$8.00</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Beef Salami or Beef Bologna      
        <span className="food-price">$8.00</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
    </div>
  );
};

export default ColdDeliMenu;
