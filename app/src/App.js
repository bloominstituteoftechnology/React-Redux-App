import React from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers/countryReducer";
import "./App.css";
import Country from "./components/Country";

const store = createStore(reducer, applyMiddleware(thunk));
// console.log(store.state);
function App() {
  return (
    <Provider store={store}>
      {/* anything inside provide will have access to store */}
      <div className='App'>
        <Country />
      </div>
    </Provider>
  );
}

export default App;
