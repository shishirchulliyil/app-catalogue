import React from "react";
import "./LeftMenuItem.css";

function LeftMenuItem(props) {
  return (
    <div className="leftMenuItem">
      <div className="leftMenuItem__name">{props.name}</div>
      <div className="leftMenuItem__count">{props.count}</div>
    </div>
  );
}

export default LeftMenuItem;
