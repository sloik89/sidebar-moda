import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  return (
    <div className={`modal-overlay ${isModalOpen && "show-modal"}`}>
      <div className="modal-container">
        <button className="close-modal" onClick={closeModal}>
          <FaTimes />
        </button>
        <h3>modal container</h3>
      </div>
    </div>
  );
};

export default Modal;
