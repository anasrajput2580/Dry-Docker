import React from 'react';
// import './menu.css';

const SaladsCatering = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="catering-header">Salads</div>
      <div className="catering-sub-header">
      <span>(Minimum 10 people)</span>
      </div>
      <hr className="menu-line" />
        {/*Food Header*/}
      <div className="food-header">
      Add grilled marinated chicken breast
      <span className="food-header-price">$4.95 per person</span>
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
      Downtown House Salad 
      <span className="food-header-price"> $3.75 PP</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
        <span>Mixed Greens, Cucumber, Tomato & Red Onion</span>
      </div>
      <div className="food-option">
        <span></span>
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Caesar Salad
      <span className="food-header-price"> $4.75 PP</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
        <span>With Garlic-flavored Croutons</span>
      </div>
      <div className="food-option">
        <span></span>
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Spinach Salads  
      <span className="food-header-price"> $4.75 PP</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
        <span>Dried Cranberry, Toasted Walnuts, Feta Cheese & Honey-Mustard Vinaigrette</span>
      </div>
      <div className="food-option">
        <span></span>
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Greek Salad  
      <span className="food-header-price">$4.25 PP</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
        <span>Mixed Greens, Grape Tomato, English Cucumber, Feta & Pitted Kalamata</span>
      </div>
      <div className="food-option">
        <span></span>
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Harvest Beet Salad  
      <span className="food-header-price">  $4.75 PP </span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
        <span>Greens, Roast Beets, Cranberry, Walnuts, Gorgonzola & Raspberry dressing</span>
      </div>
      <div className="food-option">
        <span></span>
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Chef’s Salad 
      <span className="food-header-price">$4.25 PP</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
        <span>Mixed Greens, Grape Tomato, English Cucumber, cold cuts & Swiss </span>
      </div>
      <div className="food-option">
        <span></span>
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Tri-Color Fusilli Pasta Salad 
      <span className="food-header-price">$5.00 PP </span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
        <span>With Broccoli, Cauliflower, Green Beans, Grape Tomato & Parmesan </span>
      </div>
      <div className="food-option">
        <span></span>
      </div>
    </div>
  );
};

export default SaladsCatering;
