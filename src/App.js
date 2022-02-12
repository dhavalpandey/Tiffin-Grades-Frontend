import { useState } from "react";
import React, { Suspense } from "react";

import { getStatus, getUploaded, getYear } from "./Global/Constants";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Adjectives from "./Pages/Adjectives/Adjectives";
import Login from "./Pages/Login/Login";
import Options from "./Pages/Options/Options";
import Discover from "./Pages/Discover/Discover";
import Results from "./Pages/Results/Results";
import isMobile from "./Mobile.config";
import Meet from "./Pages/Meet/Meet";
import ActiveMeets from "./Pages/Meet/ActiveMeets";
import Navbar from "./Pages/NavBar/NavBar";
import Error from "./Pages/Error/Error";
// import Sidebar from "./Pages/SideBar/SideBar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(getStatus);
  // eslint-disable-next-line
  const [adjUploaded, setAdjUploaded] = useState(getUploaded);
  // eslint-disable-next-line
  const [year, setYear] = useState(getYear);

  let isSafari = window.safari !== undefined;

  if (isMobile.any() || isSafari) {
    const Mobile = React.lazy(() => import("./Pages/Mobile/Mobile"));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Mobile />
      </Suspense>
    );
  } else if (!loggedIn) {
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
