import React from "react";
import "./Panel.css";
import { useHistory } from "react-router";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";

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

export default function Panel({ link, title, locked }) {
  const routerHistory = useHistory();
  const classes = useStyles();

  const notAvailable = locked ? true : false;

  if (notAvailable) {
    return (
      <div disabled className="panel-container">
        <Tooltip
          placement="right"
          disableFocusListener
          title="Coming soon"
          arrow
          classes={{ tooltip: classes.tooltip }}
        >
          <div disabled className="disabled panel">
            {title}
          </div>
        </Tooltip>
      </div>
    );
  } else {
    return (
      <div className="enabled panel-container">
        <div
          onClick={() => {
            routerHistory.push(`/${link}`);
          }}
          className="enabled panel"
        >
          {title}
        </div>
      </div>
    );
  }
}
