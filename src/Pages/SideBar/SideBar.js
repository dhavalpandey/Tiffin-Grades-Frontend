import React from "react";
import Panel from "./Panel/Panel";
import Divider from "./Divider/Divider";
import FadeIn from "react-fade-in";

export default function SideBar() {
  return (
    <>
      <Divider />
      <FadeIn>
        <Panel title="options" locked={true} link="teachers" />
        <Panel title="Your Options" locked={false} link="account/results" />
        <Panel title="Account Details" locked={true} link="account/details" />
        <Panel title="Logout" locked={false} link="account/logout" />
        <Panel
          title="Delete Account"
          locked={false}
          link="account/delete-account"
        />
      </FadeIn>
    </>
  );
}
