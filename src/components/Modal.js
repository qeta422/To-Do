// Modal.js
import React, { useState, useEffect } from "react";
import "../App.css";

export default function Modal({
  onClose,
  onAddNote,
  className,
  theme,
  initialValue = "",
}) {
  const [noteText, setNoteText] = useState(initialValue);

  useEffect(() => {
    setNoteText(initialValue);
  }, [initialValue]);

  const handleChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleApply = () => {
    onAddNote(noteText);
  };

  return (
    <div className={`modal ${className} ${theme}`}>
      <h1 className="modal-h1">NEW NOTE</h1>
      <input
        className="input-modal"
        type="text"
        placeholder="Input your note..."
        value={noteText}
        onChange={handleChange}
      />
      <div className="buttons">
        <button className="close-modal" onClick={onClose}>
          CANCEL
        </button>
        <button className="apply" onClick={handleApply}>
          APPLY
        </button>
      </div>
    </div>
  );
}
