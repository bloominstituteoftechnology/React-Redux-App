import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import reducer from "./reducers";
import PokeData from "./components/PokeData";
import { composeWithDevTools } from "redux-devtools-extension";



const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <PokeData />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
