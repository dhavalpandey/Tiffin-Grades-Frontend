import { useState } from "react";

import { getStatus, getUploaded } from "./Global/Constants";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Adjectives from "./Pages/Adjectives/Adjectives";
import Login from "./Pages/Login/Login";

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
          <Route path="/popular-subjects">
            <h1>Popular Subject</h1>
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
