import React from "react";
import "../App.css";

export default function Add(props) {
  return (
    <div className={props.color === "dark" ? "dark " : "white"}>
      {props.children}
    </div>
  );
}
