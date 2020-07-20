import React from "react";
import "./AppCard.css";
import Popup from "reactjs-popup";
import AppCardView from "../app-card-view/AppCardView";

function AppCard(props) {
  const returnAppCard = () => {
    return (
      <div className="appCard">
        <div className="appCard__appFlex">
          {/* app image */}
          <img
            src={props.image}
            alt="appImage"
            className="appCard__image"
          ></img>
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
  };

  return (
    <Popup trigger={returnAppCard} modal closeOnDocumentClick>
      <AppCardView
        appName={props.appName}
        appUnit={props.appUnit}
        appDesc={props.appDesc}
        image={props.image}
      />
    </Popup>
  );
}

export default AppCard;
