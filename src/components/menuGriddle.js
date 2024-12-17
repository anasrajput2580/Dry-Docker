import React from 'react';
import './menu.css';

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="menu-header">
        From Delicious Breakfasts to Deli Classics. We’ve Got Something for Everyone!
      </div>
      {/* Menu Header */}
      <div className="menu-section-header">From the Griddle</div>
      <div className="food-header">
        Egg Sandwich
        <span className="food-header-price">$3.75</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
        <span>With turkey bacon, turkey sausage or smoked turkey ham</span>
        <span className="food-price">$5.50</span>
      </div>
      <div className="food-option">
        <span>With Beef Bacon</span>
        <span className="food-price">$6.60</span>
      </div>
      <div className="food-option">
        <span>With NY Corned Beef or Pastrami</span>
        <span className="food-price">$8.90</span>
      </div>
      <div className="food-option">
        <span>With Taylor Ham-like</span>
        <span className="food-price">$6.00</span>
      </div>
      <div className="food-option">
        <span>With Flat-Iron steak</span>
        <span className="food-price">$10.00</span>
      </div>
         {/*Food Header*/}
      <div className="food-header">
        Egg & Cheese Sandwich
        <span className="food-price">$4.00</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
      {/*Food Header*/}
      <div className="food-header">
        Egg White Sandwich
        <span className="food-price">$4.00</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
      {/*Food Header*/}
      <div className="food-header">
        Western Sandwich
      </div>
      <div className="food-option">
        <span>Peppers, onion, & smoked turkey ham omelet</span>
        <span className="food-price">$7.00</span>
      </div>
         {/*Food Header*/}
      <div className="food-header">
         3 Eggs any style Platter
      </div>
      <div className="food-option">
        <span>With home fries and choice of toast </span>
        <span className="food-price">$8.50</span>
      </div>

     {/*Food Header*/}
      <div className="food-header">
        Power Wrap
      </div>
      <div className="food-option">
        <span> With peppers, onion, egg whites, Swiss cheese & baby greens</span>
        <span className="food-price">$7.75</span>
      </div>
        {/*Food Header*/}
      <div className="food-header">
          Breakfast Wrap
      </div>
      <div className="food-option">
        <span>Your choice of meat, eggs, & cheese  </span>
      </div>
    </div>
  );
};

export default Menu;
