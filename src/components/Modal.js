import React from "react";
import "../App.css";

export default function Modal({ onClose, className, theme }) {
  const closeModal = () => {
    onClose();
  };

  return (
    <div className={`modal ${className} ${theme}`}>
      <h1 className="modal-h1">NEW NOTE</h1>
      <input
        className="input-modal"
        type="text"
        placeholder="Input your note..."
      />
      <div className="buttons">
        <button className="close-modal" onClick={closeModal}>
          CANCEL
        </button>
        <button className="apply">APPLY</button>
      </div>
    </div>
  );
}
