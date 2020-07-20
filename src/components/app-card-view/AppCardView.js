import React from "react";
import "./AppCardView.css";

function AppCardView(props) {
  return (
    <div className="appCardView">
      <div className="appCardView__actionsView">
        <img
          src={props.image}
          alt="appImage"
          className="appCardView__image"
        ></img>
        <button className="appCardView__install">Install App</button>
        <button className="appCardView__request">Request App</button>
      </div>
      <div className="appCardView__appInfo">
        <p className="appCardView__appName">{props.appName}</p>
        <p className="appCardView__appUnit">{props.appUnit}</p>
        <p className="appCardView__appDesc">{props.appDesc}</p>
      </div>
    </div>
  );
}

export default AppCardView;
