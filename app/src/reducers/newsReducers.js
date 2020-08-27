import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { titleReducer } from "./reducers";
import thunk from "redux-thunk";

import Title from "./components/Title";
import News from "./components/News";
// import "./styles.css";

// Step 1: create the store
// let store = createStore(titleReducer, applyMiddleware(thunk));

function App() {
  return (
    <div className="App">
      <Title />
      <News />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(


  // Step 2: provide the store
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   rootElement
);