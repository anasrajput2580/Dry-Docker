import React from 'react';
import './menu.css';

const BagelMenu = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="menu-section-header">Bagel & More</div>
      <div className="food-header">
         Add turkey bacon, beef bacon, turkey sausage,<br/>  
         smoked turkey ham or beef salami
        <span className="food-header-price">$3.00</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span></span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Butter Roll 
        <span className="food-price">$2.00</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Bagel
      </div>
      <div className="food-option">
        <span>with spinach, onion, olives & feta  </span>
        <span className="food-price">$3.50</span>
      </div>
      <div className="food-option">
        <span>With plain, chives, veggies, Olive, sun-dried tomato or raisin cream cheese  </span>
        <span className="food-price">$5.00</span>
      </div>
      <div className="food-option">
        <span>With peanut butter & jelly  </span>
        <span className="food-price">$4.75</span>
      </div>
    {/*Food Header*/}
      <div className="food-header">
            Downtown Bagel 
        <span className="food-price">$10.00</span>
      </div>
      <div className="food-option">
        <span>With Nova lox, cream cheese, sliced tomato, red onion & capers    </span>
        <span className="food-price">$11.50</span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
        Apple Turn Over or Cheese Danish      
        <span className="food-price">$4.00</span>
       </div>
      <div className="food-option">
        <span></span>      
      </div>
            {/*Food Header*/}
      <div className="food-header">
        Plain or Chocolate Croissant  
        <span className="food-price">$3.50</span>
       </div>
      <div className="food-option">
        <span></span>      
      </div>
             {/*Food Header*/}
      <div className="food-header">
        Corn, Raisin-Bran or Blueberry Muffin      
        <span className="food-price">$3.50</span>
      </div>
      <div className="food-option">
        <span></span>      
      </div>
    </div>
  );
};

export default BagelMenu;
