import React from 'react';
import './menu.css';

const frenchToastMenu = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="menu-section-header">French Toast & Pancakes</div>
      <div className="special-header">Add turkey bacon, beef bacon, turkey sausage, smoked turkey ham or beef salami </div>
      <div className="food-header">
      Challah French Toast  
        <span className="food-header-price">$7.00</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span>with butter & maple syrup</span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Butter-Milk Pancakes 
        <span className="food-price">$7.75</span>
      </div>
      <div className="food-option">
        <span>with butter & maple syrup</span>      
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Chocolate Chip, Blueberry, Peanut Butter or Banana Pancakes 
      <span className="food-price">$8.75</span>
      </div>
      <div className="food-option">
        <span>  </span>
        <span> </span>
      </div>
          {/*Food Header*/}
      <div className="food-header">
      Belgium WafflE 
      </div>
      <div className="food-option">
        <span>with butter & maple syrup</span>    
        <span className="food-price">$7.75</span>  
      </div>
      <div className="food-option">
        <span>with fresh strawberry & whipped cream</span>    
        <span className="food-price">$9.00</span>  
      </div>
    </div>
  );
};

export default frenchToastMenu;
