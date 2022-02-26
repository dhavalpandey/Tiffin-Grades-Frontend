import React from "react";
import Sidebar from "../SideBar/SideBar";
import "./Account.css";

export default function Account() {
  return (
    <>
      <Sidebar />
      <div>
        <div className="settings-text">
          <h1>
            {localStorage.getItem("name")}, you can configure your account here.
          </h1>
        </div>
      </div>
    </>
  );
}
