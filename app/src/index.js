import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import FilmList from "./components/FilmList";

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("old state", store.getState());
  console.log("action", action);
  next(action);
  console.log(store.getState());
  console.groupEnd();
};

const store = createStore(rootReducer, applyMiddleware(logger));

function Films() {
  return (
    <div className="App">
      <FilmList />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
