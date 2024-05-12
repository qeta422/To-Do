import React from "react";
import "../App.css";

export default function Header(props) {
  return (
    <div className={props.className} onClick={props.toggleTheme}>
      {props.children}
      <h1>TODO LIST</h1>
    </div>
  );
}
