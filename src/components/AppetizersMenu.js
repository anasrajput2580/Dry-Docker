import React from 'react';
import './menu.css';

const AppetizersMenu = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="menu-section-header">Appetizers</div>
      <div className="food-header">
      Seasonal Fresh Fruit
        <span className="food-header-price">$6.00</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span></span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Potato or Spinach knish
      </div>
      <div className="food-option">
        <span>With dijon-mustard on the side  </span>
        <span className="food-price">$6.00</span>
      </div>
    {/*Food Header*/}
      <div className="food-header">
        Nova Scotia Salmon
      </div>
      <div className="food-option">
        <span>On point that with our cream, capers & fresh dill  </span>
        <span className="food-price">$12.00</span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Hummus 
      </div>
      <div className="food-option">
        <span>With za'atar, extra virgin olive oil & whole what pita   </span>
        <span className="food-price">$6.00</span>
      </div>
        {/*Food Header*/}
      <div className="food-header">
        Fresh Mozzarella & Roasted Red Pepper
      </div>
      <div className="food-option">
        <span>With balsamic & fresh basil  </span>
        <span className="food-price">$7.75</span>
      </div>
         {/*Food Header*/}
         <div className="food-header">
         Grilled Chicken Quesadilla
      </div>
      <div className="food-option">
        <span>With peppers, onion, monkery-jack  & sour cream  </span>
        <span className="food-price">$12.00</span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
          Buffalo Style Chicken Wing
      </div>
      <div className="food-option">
        <span>With celery, carrots & blue cheese dipping sauce  </span>
        <span className="food-price">$9.00</span>
      </div>
         {/*Food Header*/}
         <div className="food-header">
         Mozzarella Sticks
      </div>
      <div className="food-option">
        <span>With tomato sauce   </span>
        <span className="food-price">$8.00</span>
      </div>
         {/*Food Header*/}
         <div className="food-header">
         Chicken Tenders
      </div>
      <div className="food-option">
        <span>With honey-dijon mustard on the side   </span>
        <span className="food-price">$9.00</span>
      </div>
    </div>
  );
};

export default AppetizersMenu;
