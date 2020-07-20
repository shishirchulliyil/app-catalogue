import React from "react";
import "./RightPanelApps.css";
import AppCard from "../app-card/AppCard";
import apps from "../../dummy-data/dummy-app-list";

function RightPanelApps(props) {
  const { type } = props;
  return (
    <div className="rightPanelApps">
      <h3 className="rightPanelApps__header"> {props.headerName}</h3>
      <div className="rightPanelApps__grid">
        {/* App cards */}
        {apps !== null
          ? apps.map((app) => (
              <AppCard
                key={app.id}
                appName={app.appName}
                appUnit={app.appUnit}
                appDesc={app.appDesc}
                image={app.image}
              />
            ))
          : ""}
      </div>
    </div>
  );
}

export default RightPanelApps;
