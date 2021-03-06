import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getStatus, getUploaded, getYear } from "./Global/Constants";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Adjectives from "./Pages/Adjectives/Adjectives";
import Login from "./Pages/Login/Login";
import Options from "./Pages/Options/Options";
import Discover from "./Pages/Discover/Discover";
// eslint-disable-next-line
import Meet from "./Pages/Meet/Meet";
import ActiveMeets from "./Pages/Meet/ActiveMeets";
import Navbar from "./Pages/NavBar/NavBar";
import Error from "./Pages/Error/Error";
import Join from "./Pages/Chat/Join";
import Chat from "./Pages/Chat/Chat";
import PublicChat from "./Pages/Chat/PublicChat";
import Account from "./Pages/Account/Account";
import Results from "./Pages/Account/Results/Results";
import Logout from "./Pages/Account/Logout";
import Delete from "./Pages/Account/Delete";
import Details from "./Pages/Account/Details";
import Predict from "./Pages/Predict/Predict";

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
  let name;

  // eslint-disable-next-line
  let isSafari = window.safari !== undefined;

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
              : // eslint-disable-next-line
                (name = window.location.pathname.slice(6))}
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
          <Route exact path="/account/results">
            <Results />
          </Route>
          <Route exact path="/account/logout">
            <Logout />
          </Route>
          <Route exact path="/account/delete-account">
            <Delete />
          </Route>
          <Route exact path="/account/details">
            <Details />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
          <Route exact path="/predict">
            <Predict />
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
