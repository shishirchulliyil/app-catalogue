import React from "react";
import "./SearchInput.css";
import SearchIcon from "@material-ui/icons/Search";

function SearchInput() {
  return (
    <div className="searchInput">
      <input
        type="text"
        placeholder="Search all"
        className="searchInput__input"
      ></input>
      <SearchIcon className="searchInput__icon" />
    </div>
  );
}

export default SearchInput;
