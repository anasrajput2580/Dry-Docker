import React from 'react';
import './menu.css';

const SpecialityWrapsMenu = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="menu-section-header">Speciality Wraps</div>
      <div className="special-header">Served with choice of potato, Mac or slaw salad & pickles</div>
      <div className="food-header">
      Chicken Caesar Wrap
      <span className="food-price">$8.75</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span>Romain, parmesan, croutons & Caesar dressing</span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Italian Wrap  
      </div>
      <div className="food-option">
        <span>Seedless Jewish rye & deli mustard  </span>     
        <span className="food-price">$9.00</span> 
      </div>
        {/*Food Header*/}
      <div className="food-header">
      Mediterranean Wrap 
      <span className="food-price">$10.50</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span>Gr. Chicken, fresh mozz, baby greens, roasted peppers & balsamic</span>
      </div>
         {/*Food Header*/}
         <div className="food-header">
         Vegetarian Wrap 
      </div>
      <div className="food-option">
        <span>Lettuce, roasted peppers & hummus spread       </span>     
        <span className="food-price">$9.00</span> 
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Chunky Chicken Salad Club Wrap     
      </div>
      <div className="food-option">
        <span>Lettuce, tomato mayo & deli mustard   </span>     
        <span className="food-price">$9.00</span> 
      </div>
       {/*Food Header*/}
     <div className="food-header">
     Solid White Tuna Salad Wrap     
      </div>
      <div className="food-option">
        <span>Lettuce, tomato & mayo     </span>     
        <span className="food-price">$10.00</span> 
      </div>
       {/*Food Header*/}
     <div className="food-header">
     Turkey & Swiss Wrap     
      </div>
      <div className="food-option">
        <span>Lettuce, tomato & mayo    </span>     
        <span className="food-price">$9.75</span> 
      </div>
        {/*Food Header*/}
     <div className="food-header">
        Flat Iron Steak Fajita Wrap   
      </div>
      <div className="food-option">
        <span>    </span>     
    
      </div>
    </div>
  );
};

export default SpecialityWrapsMenu;
