import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchForm from "./SearchForm";
import Cocktails from "./Cocktails";

const MainApp = () => {
  const dispatch = useDispatch();
  const reducer = useSelector((state) => ({
    ...state,
  }));
  const { data } = reducer.dataReducer;
  return (
    <div className="container">
      <SearchForm />
      <Cocktails />
    </div>
  );
};

export default MainApp;
