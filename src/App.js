import { useState } from "react";
import React, { Suspense } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

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
import Join from "./Pages/Chat/Join";
import Chat from "./Pages/Chat/Chat";
import PublicChat from "./Pages/Chat/PublicChat";
import { motion } from "framer-motion";
// import Sidebar from "./Pages/SideBar/SideBar";

const blackBox = {
  initial: {
    height: "100vh",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

function App() {
  // eslint-disable-next-line
  const [loggedIn, setLoggedIn] = useState(getStatus);
  // eslint-disable-next-line
  const [adjUploaded, setAdjUploaded] = useState(getUploaded);
  // eslint-disable-next-line
  const [year, setYear] = useState(getYear);
  const location = useLocation();

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
      <AnimatePresence exitBeforeEnter initial={false}>
        <Navbar />
        <Switch location={location} key={location.pathname}>
          <Route exact path="/options">
            <motion.div
              className="transition"
              initial="initial"
              animate="animate"
              variants={blackBox}
            />
            <Options />
          </Route>
          <Route exact path="/discover">
            <Discover />
          </Route>
          <Route exact path="/results">
            <motion.div
              className="transition"
              initial="initial"
              animate="animate"
              variants={blackBox}
            />
            <Results />
          </Route>
          <Route exact path="/meet/active-meets">
            <motion.div
              className="transition"
              initial="initial"
              animate="animate"
              variants={blackBox}
            >
              <motion.svg className="absolute z-50 flex">
                <pattern
                  id="pattern"
                  patternUnits="userSpaceOnUse"
                  width={750}
                  height={800}
                  className="text-white"
                >
                  <rect className="w-full h-full fill-current" />
                  <motion.rect className="w-full h-full text-gray-600 fill-current" />
                </pattern>
                <text
                  className="text-4xl font-bold"
                  text-anchor="middle"
                  x="50%"
                  y="50%"
                  style={{ fill: "url(#pattern)" }}
                >
                  tailstore
                </text>
              </motion.svg>
            </motion.div>
            <ActiveMeets />
          </Route>
          <Route exact path="/meet">
            <Meet />
          </Route>
          <Route exact path="/chat">
            <Join />
          </Route>
          <Route exact path="/chat/:id" id="id">
            <Chat
              name={localStorage.getItem("name")}
              room={localStorage.getItem("chat-room")}
            />
          </Route>
          <Route exact path="/public-discussions">
            <motion.div
              className="transition"
              initial="initial"
              animate="animate"
              variants={blackBox}
            />
            <PublicChat />
          </Route>
          <Route exact path="/">
            <motion.div
              className="transition"
              initial="initial"
              animate="animate"
              variants={blackBox}
            ></motion.div>
            <Dashboard />
          </Route>
          <Route path="*">
            <motion.div
              className="transition"
              initial="initial"
              animate="animate"
              variants={blackBox}
            ></motion.div>
            <Error />
          </Route>
        </Switch>
      </AnimatePresence>
    );
  }
}

export default App;
