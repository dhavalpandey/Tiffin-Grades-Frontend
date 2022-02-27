import React from "react";
import Sidebar from "../SideBar/SideBar";
import "./Account.css";
import { Helmet } from "react-helmet";

export default function Account() {
  return (
    <>
      <Helmet>
        <title>Account</title>
      </Helmet>
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
