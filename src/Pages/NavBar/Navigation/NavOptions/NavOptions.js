import React from "react";

import "./NavOptions.css";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router";

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
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-testid="HomeWorkOutlinedIcon"
          >
            <path d="M17 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm-3.26 0 1.26.84V7z"></path>
            <path d="M10 3v1.51l2 1.33V5h9v14h-4v2h6V3z"></path>
            <path d="M8.17 5.7 15 10.25V21H1V10.48L8.17 5.7zM10 19h3v-7.84L8.17 8.09 3 11.38V19h3v-6h4v6z"></path>
          </svg>
        </div>
      </Tooltip>
      <Tooltip
        className="tooltip"
        classes={{ tooltip: classes.tooltip }}
        title="Chat"
      >
        <div
          className="icon-container"
          onClick={() => {
            routerHistory.push("/chat");
          }}
        >
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-testid="ChatOutlinedIcon"
          >
            <path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"></path>
          </svg>
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
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-tzssek-MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-testid="ManageAccountsOutlinedIcon"
          >
            <path d="M4 18v-.65c0-.34.16-.66.41-.81C6.1 15.53 8.03 15 10 15c.03 0 .05 0 .08.01.1-.7.3-1.37.59-1.98-.22-.02-.44-.03-.67-.03-2.42 0-4.68.67-6.61 1.82-.88.52-1.39 1.5-1.39 2.53V20h9.26c-.42-.6-.75-1.28-.97-2H4zm6-6c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm10.75 10c0-.22-.03-.42-.06-.63l1.14-1.01-1-1.73-1.45.49c-.32-.27-.68-.48-1.08-.63L18 11h-2l-.3 1.49c-.4.15-.76.36-1.08.63l-1.45-.49-1 1.73 1.14 1.01c-.03.21-.06.41-.06.63s.03.42.06.63l-1.14 1.01 1 1.73 1.45-.49c.32.27.68.48 1.08.63L16 21h2l.3-1.49c.4-.15.76-.36 1.08-.63l1.45.49 1-1.73-1.14-1.01c.03-.21.06-.41.06-.63zM17 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
          </svg>
        </div>
      </Tooltip>
    </div>
  );
}
