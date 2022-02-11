import React from "react";
import "./NavBar.css";
import NavDivider from "./Divider/Divider.js";
import Search from "./Search/Search";
import Navigation from "./Navigation/Navigation.js";

export default function NavBar() {
  return (
    <>
      <nav className="nav">
        <h1 className="header">Planner</h1>
        <Search />
        <Navigation />
      </nav>
      <NavDivider />
    </>
  );
}
