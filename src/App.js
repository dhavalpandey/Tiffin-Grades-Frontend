import { useState } from "react";

import { getStatus, getUploaded } from "./Global/Constants";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Adjectives from "./Pages/Adjectives/Adjectives";
import Login from "./Pages/Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(getStatus);
  const [adjUploaded, setAdjUploaded] = useState(getUploaded);

  if (loggedIn && !adjUploaded) {
    return <Adjectives />;
  } else if (loggedIn && adjUploaded) {
    return <Dashboard />;
  } else {
    return <Login />;
  }
}

export default App;
