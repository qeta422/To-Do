import React from "react";
import "../App.css";

export default function Filter(props) {
  return (
    <div className={`input ${props.color}`} onClick={props.toggleTheme}>
      {props.children}
    </div>
  );
}
