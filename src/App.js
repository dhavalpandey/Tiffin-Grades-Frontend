import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getStatus, getUploaded, getYear } from "./Global/Constants";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Adjectives from "./Pages/Adjectives/Adjectives";
import Login from "./Pages/Login/Login";
import Options from "./Pages/Options/Options";
import Discover from "./Pages/Discover/Discover";
import Results from "./Pages/Results/Results";
// eslint-disable-next-line
import isMobile from "./Mobile.config";
import Meet from "./Pages/Meet/Meet";
import ActiveMeets from "./Pages/Meet/ActiveMeets";
import Navbar from "./Pages/NavBar/NavBar";
import Error from "./Pages/Error/Error";
import Join from "./Pages/Chat/Join";
import Chat from "./Pages/Chat/Chat";
import PublicChat from "./Pages/Chat/PublicChat";
// import Sidebar from "./Pages/SideBar/SideBar";

function App() {
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(getStatus);
  // eslint-disable-next-line
  const [adjUploaded, setAdjUploaded] = useState(getUploaded);
  // eslint-disable-next-line
  const [year, setYear] = useState(getYear);
  // eslint-disable-next-line
  const [room, setRoom] = useState(localStorage.getItem("chat-room"));
  localStorage.setItem("chat-room", room);

  // eslint-disable-next-line
  let isSafari = window.safari !== undefined;

  // if (isMobile.any() || isSafari) {
  //   const Mobile = React.lazy(() => import("./Pages/Mobile/Mobile"));
  //   return (
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <Mobile />
  //     </Suspense>
  //   );
  if (!loggedIn) {
    return <Login />;
  } else if ((loggedIn && !adjUploaded) || !year) {
    return <Adjectives />;
  } else if (loggedIn && adjUploaded && year) {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/options">
            <Options />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>
          <Route exact path="/meet/active-meets">
            <ActiveMeets />
          </Route>
          <Route exact path="/meet">
            <Meet />
          </Route>
          <Route exact path="/chat/:id" id="id">
            {window.location.pathname.slice(6) !== "" &&
            window.location.pathname.toString().includes("chat")
              ? localStorage.setItem(
                  "chat-room",
                  window.location.pathname.slice(6),
                )
              : console.log(window.location.pathname.slice(6))}
            <Chat
              name={localStorage.getItem("name")}
              room={localStorage.getItem("chat-room")}
            />
          </Route>
          <Route exact path="/chat">
            <Join />
          </Route>
          <Route exact path="/public-discussions">
            <PublicChat />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
