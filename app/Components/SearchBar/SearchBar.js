import React from "react";
import SearchIcon from "app/Assets/Img/SearchIcon.svg";

function SearchBar({ style }) {
  // const [placeholder, setPlaceholder] = React.useState("Search");
  // const possibleSearches = ["Hostels", "Shops", "Academics", "Events", "Admin"];

  return (
    <div className="SearchBarWrapper" style={style}>
      <input
        className="SearchBarWrapper__input"
        type="text"
        placeholder={"Search"}
      />
      <button type="button" className="SearchBarWrapper__submit">
        {/* <span> */}
        <img src={SearchIcon} alt="Search Icon" />
        {/* </span> */}
      </button>
    </div>
  );
}

export default SearchBar;
