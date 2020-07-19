import React from "react";
import "./RightPanelApps.css";
import AppCard from "../app-card/AppCard";

function RightPanelApps(props) {
  const { type } = props;
  return (
    <div className="rightPanelApps">
      <h3 className="rightPanelApps__header"> {props.headerName}</h3>
      <div className="rightPanelApps__grid">
        {/* App cards */}
        <AppCard />
        <AppCard />
        <AppCard />
        <AppCard />
      </div>
    </div>
  );
}

export default RightPanelApps;
