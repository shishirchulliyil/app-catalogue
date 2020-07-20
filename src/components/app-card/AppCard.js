import React from "react";
import "./AppCard.css";

function AppCard(props) {
  return (
    <div className="appCard" onclick="location.href='#';">
      <div className="appCard__appFlex">
        {/* app image */}
        <img src={props.image} className="appCard__image"></img>
        <div className="appCard__appDetails">
          {/* app name */}
          <p className="appCard__appName">{props.appName}</p>
          {/* app unit */}
          <p className="appCard__appUnit">{props.appUnit}</p>
        </div>
      </div>
      {/* app description */}
      <p className="appCard__appDesc">{props.appDesc}</p>
    </div>
  );
}

export default AppCard;
