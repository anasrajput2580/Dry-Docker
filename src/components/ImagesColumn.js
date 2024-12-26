import React from "react";
import "./ImageColumn.css"; // Import the CSS file for styling

const ImageColumn = () => {
  return (
    <div className="image-column-container">
      <div className="image-wrapper1">
        <img src="./Home/image1.jpg" alt="Menu 1" className="responsive-image" />
      </div>
      <div className="image-wrapper2">
        <img src="./Home/image2.jpg" alt="Menu 2" className="responsive-image" />
      </div>
      <div className="image-wrapper3">
        <img src="./Home/image3.jpg" alt="Menu 3" className="responsive-image" />
      </div>
    </div>
  );
};

export default ImageColumn;
