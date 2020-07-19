import React from "react";
import LeftMenuItem from "../left-menu-item/LeftMenuItem";
import "./LeftMenu.css";

function LeftMenu(props) {
  const { businessAppList } = props;

  return (
    <div className="leftMenu">
      <h4 className="leftMenu__header">BUSINESS UNIT</h4>
      {businessAppList !== null
        ? businessAppList.map((item) => (
            <LeftMenuItem key={item.id} name={item.name} count={item.count} />
          ))
        : ""}
    </div>
  );
}

export default LeftMenu;
