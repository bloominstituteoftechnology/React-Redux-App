import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import React from "react";
import thunk from "redux-thunk";
import cardReducer from "./reducers";
import CardList from "./components/YugiohCardList";
import SearchForm from "./components/SearchForm";

const store = createStore(cardReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
    <div>
      <h1>Yu-Gi_Oh card list</h1>
      <SearchForm />
      <CardList />
    </div>
  </Provider>
  );
}

export default App;
