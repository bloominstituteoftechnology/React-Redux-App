import React from "react";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import CatForm from "./components/CatForm";
import CatList from "./components/CatList";
import { catReducer as reducer } from "./reducers/CatReducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      {/* //any component within this Provider will have access to the Redux store */}

      <div className='App'>
        <h1>Genrenator</h1>
        <CatForm />
        <CatList />
      </div>
    </Provider>
  );
}
