import React, { useState } from "react";
import "../App.css";

export default function Modal({ onClose, onAddNote, className, theme }) {
  const [noteText, setNoteText] = useState("");

  const handleAddNote = () => {
    if (noteText.trim()) {
      onAddNote(noteText.trim());
      setNoteText("");
    }
  };

  return (
    <div className={`modal ${className} ${theme}`}>
      <h1 className="modal-h1">NEW NOTE</h1>
      <input
        className="input-modal"
        type="text"
        placeholder="Input your note..."
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
      />
      <div className="buttons">
        <button className="close-modal" onClick={onClose}>
          CANCEL
        </button>
        <button className="apply" onClick={handleAddNote}>
          APPLY
        </button>
      </div>
    </div>
  );
}
