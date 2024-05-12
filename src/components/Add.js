import React from "react";
import "../App.css";

export default function Add(props) {
  return (
    <div className={props.className} onClick={props.toggleTheme}>
      {props.children}
    </div>
  );
}
