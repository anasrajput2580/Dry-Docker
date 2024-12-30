import React from "react";
import "./ImageColumn.css"; // Import the CSS file for styling

const Header = ({text}) => {
  return (
    <div className="menu-section-header">{text}</div>
  );
};

export default Header;