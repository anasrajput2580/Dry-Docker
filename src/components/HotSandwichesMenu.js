import React from 'react';
import './menu.css';

const HotSandwichesMenu = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="menu-section-header">Hot Sandwiches & Burgers</div>
      <div className="food-header">
      NY Corned Beef Sandwich or pastrami sandwich
        <span className="food-header-price">$10.00</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span>Seedless Jewish rye & deli mustard  </span>
      </div>
    {/*Food Header*/}
    <div className="food-header">
    Chicken Cutlet hoagie
        <span className="food-header-price">$9.75</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span>With lettuce, tomato & mayo </span>
      </div>
     {/*Food Header*/}
      <div className="food-header">
        BLT
        <span className="food-header-price">$7.75</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span>Turkey bacon, lettuce, tomato & mayonnaise </span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Classic Reuben 
        <span className="food-header-price">$12.75</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span>With NY corned beef,  saurkrouts, Swiss, Russian & seedless ye  </span>
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Downtown Grilled Chicken Sandwich  
        <span className="food-header-price">$10.75</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span>Sun-dried tomato & fresh mozzarella  </span>
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Classic Philly Steak  
        <span className="food-header-price">$10.00</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span>With peppers, onion & cheese   </span>
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Kosher Hot Dog  
        <span className="food-header-price">$6.75</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span>(2 Hebrew National) classically served     </span>
      </div>
    {/*Food Header*/}
         <div className="food-header">
         Grilled Cheese
         <span className="food-header-price">$6.00</span>
      </div>
      <div className="food-option">
        <span>With tomato </span>
        <span className="food-price">$6.35</span>
      </div>
      <div className="food-option">
        <span>With meat </span>
        <span className="food-price">$8.00</span>
      </div>
      <div className="food-option">
        <span>With meat and tomato</span>
        <span className="food-price">$8.35</span>
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Prime Burger    
        <span className="food-header-price">$10.00</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span>(1/2 lb.) lettuce, tomato, red onion & brioche roll       </span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Deluxe Burger 
        <span className="food-header-price">$13.00</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span> </span>
      </div>
    </div>
  );
};

export default HotSandwichesMenu;
