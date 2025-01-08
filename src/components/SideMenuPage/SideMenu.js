import React, { useState } from "react";
import './SideMenu.css'

const SideMenu = () => {
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
      <div className="image-column-area">
        <div className="image-wrapper">  <img
            src="./Side_Menu/Side-Left.png"
            alt="Menu 2"
            className="responsive-image"
            onClick={() => openModal("./Side_Menu/Side-Left.png")}
          /></div>
        <div className="image-wrapper">
          <img
            src="./Side_Menu/Side-Right.png"
            alt="Menu 2"
            className="responsive-image"
            onClick={() => openModal("./Side_Menu/Side-Right.png")}
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

export default SideMenu;
