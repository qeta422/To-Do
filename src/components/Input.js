// import "sass/components/input.scss";
import React from "react";
import "../App.css";

export default function Input(props) {
  return (
    <div className={props.className} onClick={props.toggleTheme}>
      {props.children}
    </div>
  );
}
