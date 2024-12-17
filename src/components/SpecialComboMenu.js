import React from 'react';
import './menu.css';

const SpecialComboMenu = () => {
  return (
    <div className="menu-container">
      {/* Menu Header */}
      <div className="menu-section-header">Special Combo & Triple Deckers</div>
      <div className="special-header">Lettuce, tomato, choice of slaw or Mac salad & pickles on the side</div>
      <div className="food-header">
      The New Yorker 
      <span className="food-price">$10.75</span>
      </div>
      {/*Food Options*/}
      <div className="food-option">
      <span>Hot pastrami, NY corned beef, seedless Jewish rye, slaw & Russian dressing</span>
      </div>
      {/*Food Header*/}
      <div className="food-header">
      Italian Submarine Sandwich 
      </div>
      <div className="food-option">
        <span>With the works   </span>     
        <span className="food-price">$8.50</span> 
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Dry-dock Combo
      </div>
      <div className="food-option">
        <span>Seedless Jewish rye, NY corned beef, pastrami, oven-gold turkey & Russian dressing  </span>     
        <span className="food-price">$11.00</span> 
      </div>
      <div className="food-option">
        <span>Make it sloppy     </span>     
        <span className="food-price">$11.50</span> 
      </div>
       {/*Food Header*/}
       <div className="food-header">
       Jhon Miller Way Combo   
       <span className="food-price">$10.75</span> 
      </div>
      <div className="food-option">
        <span>Oven-gold turkey, NY corned beef & horseradish Russian dressing </span>     
      </div>
     {/*Food Header*/}
     <div className="food-header">
     All Time Favored Sloppy Joe's   
       <span className="food-price">$9.75</span> 
      </div>
      <div className="food-option">
        <span>Oven-gold turkey, roast beed,  slaw, Russian dressing and choice of bread     </span>     
      </div>
        {/*Food Header*/}
     <div className="food-header">
     Oven-gold Turkey Triple Decker Sandwich      
       <span className="food-price">$9.75</span> 
      </div>
      <div className="food-option">
        <span>Oven-gold turkey, lettuce, tomato, mayo & choice of toast     </span>     
        <span className="food-price">$11.00</span> 
      </div>
        {/*Food Header*/}
     <div className="food-header">
     London-Broil Roast Beef  Triple Decker Sandwich      
       <span className="food-price">$11.00</span> 
      </div>
      <div className="food-option">
        <span>   </span>     
      </div>
    </div>
  );
};

export default SpecialComboMenu;
