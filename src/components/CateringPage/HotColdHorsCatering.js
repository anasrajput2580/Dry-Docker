import React from 'react';
// import './menu.css';

const HotColdHorsCatering = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="catering-header">HOT & COLD HORS D’OEUVRES</div>
      <div className="catering-sub-header">
      <span>($9.95 per person, 4 choices, Minimum 15 people)</span>
      </div>
      <hr className="menu-line" />
      <div className="food-header">
      U-15 Jumbo Shrimp Cocktail or Coconut Battered
      <span className="food-header-pric">$2.25 Each</span>
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
      Smoked Salmon Canapés
      </div>
      <div className="food-option">
        <span>On point toast with sour cream, capers & fresh dill</span>      
      </div>
        {/*Food Header*/}
        <div className="food-header">
        Buffalo-Style Chicken Wings
      </div>
      <div className="food-option">
        <span>With celery, carrots & blue cheese dipping sauce</span>      
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Stuffed Mushroom 
      </div>
      <div className="food-option">
        <span>With Crabmeat Stuffing</span>      
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Mini Potato Pancakes  
      </div>
      <div className="food-option">
        <span>With Applesauce</span>      
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Pigs in the blanket 
      </div>
      <div className="food-option">
        <span>With Deli Mustard</span>      
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Fried Zucchini Sticks 
      </div>
      <div className="food-option">
        <span>With Tomato Sauce</span>      
      </div>
    </div>
  );
};

export default HotColdHorsCatering;
