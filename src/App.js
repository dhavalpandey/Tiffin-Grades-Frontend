import { useState } from "react";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getStatus, getUploaded, getYear } from "./Global/Constants";

//Components
const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard"));
const Adjectives = React.lazy(() => import("./Pages/Adjectives/Adjectives"));
const Login = React.lazy(() => import("./Pages/Login/Login"));
const Options = React.lazy(() => import("./Pages/Options/Options"));
const Discover = React.lazy(() => import("./Pages/Discover/Discover"));
// eslint-disable-next-line
const Meet = React.lazy(() => import("./Pages/Meet/Meet"));
const ActiveMeets = React.lazy(() => import("./Pages/Meet/ActiveMeets"));
const Navbar = React.lazy(() => import("./Pages/NavBar/NavBar"));
const Error = React.lazy(() => import("./Pages/Error/Error"));
const Join = React.lazy(() => import("./Pages/Chat/Join"));
const Chat = React.lazy(() => import("./Pages/Chat/Chat"));
const PublicChat = React.lazy(() => import("./Pages/Chat/PublicChat"));
const Account = React.lazy(() => import("./Pages/Account/Account"));
const Results = React.lazy(() => import("./Pages/Account/Results/Results"));
const Logout = React.lazy(() => import("./Pages/Account/Logout"));
const Delete = React.lazy(() => import("./Pages/Account/Delete"));
const Details = React.lazy(() => import("./Pages/Account/Details"));

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
