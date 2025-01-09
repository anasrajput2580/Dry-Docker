import React, { useState } from "react";
import './CateringMenu.css';

const CateringMenu = ({ img1, img2, img3 }) => {
  const [modalImage, setModalImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="image-column-container">
        <div className="image-wrapper1">
          <img
            src="./CateringPage/CateringImage1Left.png"
            alt="Menu 1"
            className="responsive-image"
            onClick={() => openModal("./CateringPage/CateringImage1Left.png")}
          />
        </div>
        <div className="image-wrapper2">
          <img
            src="./CateringPage/CateringImage2Right.png"
            alt="Menu 2"
            className="responsive-image"
            onClick={() => openModal("./CateringPage/CateringImage2Right.png")}
          />
        </div>
      </div>
      
      {isModalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <span className="close-btn" onClick={closeModal}>
            &times;
          </span>
          <img src={modalImage} alt="Enlarged" className="modal-image" />
        </div>
      )}
    </>
  );
};

export default CateringMenu;
