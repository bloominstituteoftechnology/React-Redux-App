import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import SearchForm from "./SearchForm";
import Cocktails from "./Cocktails";
import CocktailDescription from "./CocktailDescription";

const MainApp = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));
  const { data, searchVal, error } = reducer.dataReducer;

  useEffect(() => {
    dispatch({ type: "FETCHING_DATA" });
    axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchVal}`
      )
      .then((res) => {
        dispatch({ type: "NEW_DATA", payload: res.data.drinks });
      })
      .catch((err) => {
        dispatch({ type: "ERROR", payload: err });
      });
  }, [searchVal]);

  const getInputValue = (value) => {
    dispatch({ type: "GET_INPUT_VALUE", payload: value });
  };

  return (
    <div className="container">
      {!error && (
        <div>
          <Route exact path="/">
            <SearchForm getInputValue={getInputValue} />
            <Cocktails data={data} />
          </Route>

          <Route exact path="/des/:id">
            <CocktailDescription data={data} />
          </Route>
        </div>
      )}
    </div>
  );
};

export default MainApp;
