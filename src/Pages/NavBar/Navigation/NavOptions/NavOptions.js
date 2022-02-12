import React from "react";

import "./NavOptions.css";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";

const useStyles = makeStyles((theme) => ({
  tooltip: {
    alignContent: "center",
    backgroundColor: "#D1D5DB",
    color: "#18191A",
    fontSize: 14.2,
    fontFamily: "Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif",
    borderRadius: 7,
    textAlign: "center",
    height: 28,
  },
}));

export default function NavOptions() {
  const routerHistory = useHistory();
  const classes = useStyles();

  return (
    <div className="nav-icons">
      <Tooltip
        className="tooltip"
        classes={{ tooltip: classes.tooltip }}
        title="Home"
      >
        <div
          style={{ textDecoration: "none" }}
          to="/home"
          className="icon-container"
          onClick={() => {
            routerHistory.push("/");
          }}
        >
          <HomeWorkOutlinedIcon fontSize="large" />
        </div>
      </Tooltip>
      <Tooltip
        className="tooltip"
        classes={{ tooltip: classes.tooltip }}
        title="Discussions"
      >
        <div
          className="icon-container"
          onClick={() => {
            routerHistory.push("/chat");
          }}
        >
          <ChatOutlinedIcon fontSize="large" />
        </div>
      </Tooltip>
      <Tooltip
        className="tooltip"
        classes={{ tooltip: classes.tooltip }}
        title="Account"
      >
        <div
          style={{ textDecoration: "none" }}
          to="/home"
          className="icon-container"
          onClick={() => {
            routerHistory.push("/account");
          }}
        >
          <ManageAccountsOutlinedIcon fontSize="large" />
        </div>
      </Tooltip>
    </div>
  );
}
