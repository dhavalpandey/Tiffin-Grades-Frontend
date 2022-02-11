import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";

export default function Search() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    return isActive;
  }, [isActive]);

  return (
    <div
      className="input-group search-field"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <SearchIcon
        fontSize="large"
        className={`search-icon ${isActive ? "active" : "inactive"}`}
      />
      <input
        autoComplete="off"
        className="form-control"
        type="text"
        name="search"
        id="search"
        required="required"
        placeholder=" "
      />
      <label className="input-label">Search Planner</label>
    </div>
  );
}
