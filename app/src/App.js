import React from "react";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";

// import { appReducer as reducer } from "./reducers/appReducer";

import Header from "./components/Header";
import ComicList from "./components/ComicList";

import "./App.css";

// const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    // <Provider store={store}>
      <div className="App">
        <Header />
        <ComicList />
      </div>
    // </Provider>
  );
}

export default App;
