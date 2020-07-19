import React, { useState } from "react";
import "./RightPanel.css";
import RightPanelApps from "../right-panel-apps/RightPanelApps";
import Pagination from "@material-ui/lab/Pagination";

function RightPanel() {
  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div className="rightPanel">
      {/* Featured apps */}
      <RightPanelApps headerName="Featured Apps" type="featured" />
      {/* All Apps */}
      <RightPanelApps headerName="All Apps" type="all" />
      {/* pagination */}

      <div className="rightPanel__pagesParentDiv">
        <p>Page:{page}</p>
        <Pagination
          className="rightPanel__pages"
          count={10}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default RightPanel;
