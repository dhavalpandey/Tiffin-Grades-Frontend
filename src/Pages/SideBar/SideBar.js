import React from "react";
import Panel from "./Panel/Panel";
import Divider from "./Divider/Divider";
import FadeIn from "react-fade-in";

export default function SideBar() {
  return (
    <>
      <Divider />
      <FadeIn>
        <Panel title="Teachers" locked={true} link="teachers" />
        <Panel title="Find your Options" locked={false} link="options" />
        <Panel title="Popular Subjects" locked={false} link="discover" />
        <Panel title="Study Sessions" locked={false} link="meet" />
        <Panel title="Classroom" locked={true} link="class" />
        <Panel title="Calendar" locked={true} link="calender" />
        <Panel title="Help" locked={true} link="help" />
      </FadeIn>
    </>
  );
}
