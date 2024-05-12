// import "sass/components/input.scss";
import React from "react";
import "../App.css";

export default function Input(props) {
  return (
    <div className={`header ${props.color}`} onClick={props.toggleTheme}>
      {props.children}
    </div>
  );
}
