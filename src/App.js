import { useState } from "react";

import { LoginContext } from "./Global/Context";
import { getStatus } from "./Global/Constants";

import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(getStatus);

  if (loggedIn) {
    return (
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Dashboard />
      </LoginContext.Provider>
    );
  } else {
    return (
      <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
        <Login />
      </LoginContext.Provider>
    );
  }
}

export default App;
