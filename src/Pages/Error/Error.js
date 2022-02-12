import React from "react";
import "./Error.css";
import { Helmet } from "react-helmet";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="errorText">
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <h1 style={{ marginTop: "13%" }}>Looks like you're lost...</h1>
      <section class="error-container">
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
        <span class="zero">
          <span class="screen-reader-text">0</span>
        </span>
        <span class="four">
          <span class="screen-reader-text">4</span>
        </span>
      </section>
      <div class="link-container">
        <Link to="/" style={{ color: "inherit", textDecoration: "inherit" }}>
          <Button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "47%",
            }}
            className="backButton1"
            variant="contained"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
