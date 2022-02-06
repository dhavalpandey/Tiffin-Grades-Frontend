import { useState } from "react";

import { getStatus, getUploaded } from "./Global/Constants";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Adjectives from "./Pages/Adjectives/Adjectives";
import Login from "./Pages/Login/Login";
import Options from "./Pages/Options/Options";
import Discover from "./Pages/Discover/Discover";
import Results from "./Pages/Results/Results";
import Meet from "./Pages/Meet/Meet";
import ActiveMeets from "./Pages/Meet/ActiveMeets";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(getStatus);
  // eslint-disable-next-line
  const [adjUploaded, setAdjUploaded] = useState(getUploaded);

  if (loggedIn && !adjUploaded) {
    return <Adjectives />;
  } else if (loggedIn && adjUploaded) {
    return (
      <Router>
        <Switch>
          <Route path="/options">
            <Options />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/meet/active-meets">
            <ActiveMeets />
          </Route>
          <Route path="/meet">
            <Meet />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    );
  } else {
    return <Login />;
  }
}

export default App;
