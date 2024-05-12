import React from "react";
import "../App.css";

export default function Mode(props) {
  return (
    <div className={`mode ${props.color}`} onClick={props.toggleTheme}>
      {props.children}
    </div>
  );
}
