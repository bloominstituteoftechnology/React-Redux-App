import React from "react";
import "./styles.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import MissionForm from "./components/MissionForm";
import MissionsList from "./components/MissionsList";
import { missionsReducer as reducer } from "./reducers/missionsReducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      {/* //any component within this Provider will have access to the Redux store */}

      <div className='App'>
        <h1>Space Missions</h1>
        <MissionForm />
        <MissionsList />
      </div>
    </Provider>
  );
}
