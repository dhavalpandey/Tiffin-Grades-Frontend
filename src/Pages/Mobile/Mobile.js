import React from "react";
import "./Mobile.css";
import { Helmet } from "react-helmet";

export default function Mobile() {
  return (
    <div className="mobile">
      <Helmet>
        <title>Mobile Usage is not available</title>
      </Helmet>
      <h1 className="mobile-error">
        Sorry, you cannot view this website on a Mobile Device.
      </h1>
    </div>
  );
}
