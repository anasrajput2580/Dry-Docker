import React from 'react';
// import './menu.css';

const PastaCatering = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="catering-header">PASTA</div>
      <div className="catering-sub-header">
      <span>Served with Garlic Bread</span>
      </div>
      <div className="catering-sub-header">
      <span>(half pan. $55, full. $100)</span>
      </div>
      <hr className="menu-line" />
        {/*Food Header*/}
      <div className="food-header">
      Baked Ziti 
      </div>
      {/*Food Options*/}
      <div className="food-option">
        <span>Meat Lasagna, Vegetable Lasagna </span>
      </div>
      <div className="food-option">
        <span></span>
      </div>
    {/*Food Header*/}
      <div className="food-header">
      Angel-hair Pasta Primavera
      </div>
      {/*Food Options*/}
      <div className="food-option">
        <span>Manicotti (with Plum Tomato sauce) </span>
      </div>
      <div className="food-option">
        <span></span>
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Cavatappi Mac & Cheese  

      </div>
      {/*Food Options*/}
      <div className="food-option">
        <span>Add Shrimp</span>
        <span className="food-header-price"> $1.5 Per Person</span>
      </div>
      <div className="food-option">
        <span>Penne Vodka (add Gr. Chix)</span>
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Tri-Color Cheese Tortellini Pesto
      </div>
      {/*Food Options*/}
      <div className="food-option">
        <span>Pastitsio (Greek Baked Ziti )</span>
      </div>
      <div className="food-option">
        <span></span>
      </div>
       
    </div>
  );
};

export default PastaCatering;
