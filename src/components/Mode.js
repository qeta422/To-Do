import React from "react";
import "../App.css";

export default function Mode({ toggleTheme, children }) {
  return (
    <div className="mode" onClick={toggleTheme}>
      {children}
    </div>
  );
}
