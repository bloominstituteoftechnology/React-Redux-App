import React from "react";
import "./App.css";
import * as animate from "animate.css";

import Activity from "./components/Activity";
import Nav from "./components/Nav";
import Loader from "./components/Loader";
import Login from "./components/Login";

function App() {
  return (
    <div className="wrapper">
      <Nav />
      <Login />
      <Activity />
      <Loader />
    </div>
  );
}

export default App;
