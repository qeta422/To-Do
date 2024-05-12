import React from "react";
import "../App.css";

export default function Mode(props) {
  return (
    <div className={props.className} onClick={props.toggleTheme}>
      {props.children}
    </div>
  );
}
