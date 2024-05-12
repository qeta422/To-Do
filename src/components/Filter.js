import React from "react";
import "../App.css";

export default function Filter(props) {
  return (
    <div className={`filter ${props.color}`} onClick={props.toggleTheme}>
      {props.children}
    </div>
  );
}
