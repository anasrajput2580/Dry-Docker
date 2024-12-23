import React from 'react';
// import './menu.css';

const PaniniCatering = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="catering-header">PANINI SANDWICHES</div>
      <div className="catering-sub-header">
      <span>Served with Cole Slaw or Mac salad & pickle</span>
      </div>
      <div className="catering-sub-header">
      <span>(minimum 8 $11. pg)</span>
      </div>
      <hr className="menu-line" />
      {/* Header */}
      <div className="food-header">
      Roast Beef, Caramelized Onion, Provolone & Russian 
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
      Oven-Gold Turkey, Swiss Cheese & Chipotle Mayo
      </div>
      <div className="food-option">
        <span></span>      
      </div>
        {/*Food Header*/}
        <div className="food-header">
        Grilled Chicken, Sun-Dried Tomato & Fresh Mozzarella *Italian Panini 
      </div>
      <div className="food-option">
        <span></span>      
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Marinated Grilled Veggies, Fresh Mozzarella, Roasted peppers & Pesto Sauce 
      </div>
      <div className="food-option">
        <span></span>      
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Buffalo Gourmet Chicken & Gorgonzola Cheese 
      </div>
      <div className="food-option">
        <span></span>      
      </div>
    </div>
  );
};

export default PaniniCatering;
