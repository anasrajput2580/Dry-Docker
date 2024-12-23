import React from 'react';
// import './menu.css';

const HotBreakfastCatering = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="catering-header">HOT BREAKFAST</div>
      <div className="catering-sub-header">
      <span>Served with white, whole wheat & rye toast</span>
      </div>
      <hr className="menu-line" />
      <div className="food-header">
      Scrambled Eggs
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
      Butter-Milk Pancakes or Challah French Toast
      </div>
      <div className="food-option">
        <span>Choice of 2: Turkey Sausage, Beef Bacon,  Turkey bacon, Turkey Ham, Beef Salami</span>      
      </div>
        {/*Food Header*/}
        <div className="food-header">
        Home Fried Potato
      </div>
      <div className="food-option">
        <span></span>      
      </div>
    </div>
  );
};

export default HotBreakfastCatering;
