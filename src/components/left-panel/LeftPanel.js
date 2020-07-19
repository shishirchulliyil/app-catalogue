import React from "react";
import SearchInput from "../searchInput/SearchInput";
import "./LeftPanel.css";

import businessUnitApps from "../../dummy-data/dummy-leftMenu-business-list";
import LeftMenu from "../left-menu/LeftMenu";

function LeftPanel() {
  return (
    <div className="leftPanel">
      {/* search panel */}
      <SearchInput />

      {/* business unit */}
      <LeftMenu businessAppList={businessUnitApps} />
      {/* location */}
      <LeftMenu businessAppList={businessUnitApps} />
      {/* type */}
      <LeftMenu businessAppList={businessUnitApps} />
    </div>
  );
}

export default LeftPanel;
