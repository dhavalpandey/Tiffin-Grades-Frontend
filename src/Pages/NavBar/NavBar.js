import React from "react";
import "./NavBar.css";
import NavDivider from "./Divider/Divider.js";
import Search from "./Search/Search";
import Navigation from "./Navigation/Navigation.js";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  const history = useHistory();
  return (
    <>
      <nav className="nav">
        <h1
          className="header"
          onClick={() => {
            history.push("/");
          }}
        >
          Planner
        </h1>
        <Search />
        <Navigation />
      </nav>
      <NavDivider />
    </>
  );
}
