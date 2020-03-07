import React from "react";

import "./App.css";
import AppPosts from "./components/AppPosts";
import AppPostForm from "./components/AppPostForm";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <AppPostForm />
      <hr />
      <AppPosts />
    </div>
  );
}

export default App;
