import React from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SearchForm from "./SearchForm";
import Cocktails from "./Cocktails";
import CocktailDescription from "./CocktailDescription";

const MainApp = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));
  const { data } = reducer.dataReducer;
  return (
    <div className="container">
      <Route exact path="/">
        <SearchForm />
        <Cocktails />
      </Route>

      <Route exact path="/des/:id">
        <CocktailDescription />
      </Route>
    </div>
  );
};

export default MainApp;
