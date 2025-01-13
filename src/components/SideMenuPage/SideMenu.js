import React from "react";
import './SideMenu.css'

const SideMenu = () => {
  // const [modalImage, setModalImage] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = (imageSrc) => {
  //   setModalImage(imageSrc);
  //   setIsModalOpen(true);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <div className="image-column-area">
        <div className="image-wrapper">  <img
            src="./Side_Menu/Side-Left.png"
            alt="Menu 2"
            className="responsive-image"
            // onClick={() => openModal("./Side_Menu/Side-Left.png")}
          />
        </div>
        <div className="image-wrapper">
          <img
            src="./Side_Menu/Side-Right.png"
            alt="Menu 2"
            className="responsive-image"
            // onClick={() => openModal("./Side_Menu/Side-Right.png")}
          />
        </div>
      </div>
      <div className="Cat-footer">
    <ul className="Cat-list">
    <li>
        <span className="checkmark">✔</span> Our chicken and beef are sourced from certified organic and halal suppliers.
      </li>
      <li>
        <span className="checkmark">✔</span> The menu items, prices, and
        availability listed on this website are subject to change without
        notice.
      </li>
      <li>
        <span className="checkmark">✔</span> We take care to prepare all meals
        with the highest quality and safety standards. However,
        cross-contamination of allergens may occur in our kitchen. Please
        inform us of any dietary restrictions or allergies before placing
        your order.
      </li>
      <li>
        <span className="checkmark">✔</span> We do not currently offer delivery
        services. Any third-party delivery options are managed by independent
        providers, and we are not responsible for their actions or fees.
      </li>
    </ul>
    </div>
      {/* {isModalOpen && (
        <div className="image-modal" onClick={closeModal}>
          <span className="close-btn" onClick={closeModal}>
            &times;
          </span>
          <img src={modalImage} alt="Enlarged" className="modal-image" />
        </div>
      )} */}
    </>
  );
};

export default SideMenu;
