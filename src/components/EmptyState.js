import React from "react";
import "../App.css";

const EmptyState = () => {
  return (
    <div className="empty-state">
      <img
        src="../documents/2808307.png"
        alt="No results"
        className="empty-state-image"
      />
      <p className="empty-state-text">No notes found</p>
    </div>
  );
};

export default EmptyState;
