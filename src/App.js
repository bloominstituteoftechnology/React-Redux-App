import React, { useState } from "react";

import Form from "./components/Form";
import List from "./components/List";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";

const App = () => {
  const [url, setUrl] = useState(
    "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=react"
  );

  return (
    <div className="App">
      <h1>Annual Country Holidays</h1>
      <Form url={url} setUrl={setUrl} />
      <List url={url} setUrl={setUrl} />
    </div>
  );
};

export default App;
