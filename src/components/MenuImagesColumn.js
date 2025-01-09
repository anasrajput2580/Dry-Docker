import React, { useState } from "react";
import "./ImageColumn.css";

const ImageColumn = () => {
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
            src="./Home/DDBMenuLeft.png"
            alt="Menu 1"
            className="responsive-image"
            onClick={() => openModal("./Home/DDBMenuLeft.png")}
          />
        </div>
        <div className="image-wrapper2">
          <img
            src="./Home/DDBMenuRight.png"
            alt="Menu 2"
            className="responsive-image"
            onClick={() => openModal("./Home/DDBMenuRight.png")}
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

export default ImageColumn;
