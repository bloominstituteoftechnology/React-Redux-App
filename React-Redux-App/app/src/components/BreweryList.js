import React, { useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { getBreweries } from "../actions";
import { TextField, Button, makeStyles } from "@material-ui/core";
import Brewery from "./Brewery";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  button: {
    margin: "5% 0",
  },
  loader: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  error: {
    background: "red",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "center",
  },
});

const BreweryList = (props) => {
  const { breweries, error, isFetching } = useSelector((state) => state);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [cityName, setCityName] = useState("");

  const fetchBreweries = (e) => {
    e.preventDefault();
    dispatch(getBreweries(cityName));
    setCityName("");
  };

  const handleChange = (e) => {
    setCityName(e.target.value);
  };

  return (
    <div className={classes.root}>
      <form className={classes.form} onSubmit={fetchBreweries}>
        <h1 className={classes.title}>Brewery Finder</h1>
        <TextField
          type="text"
          id="cityName"
          label="Enter City"
          value={cityName}
          onChange={handleChange}
        ></TextField>
        <Button
          type="submit"
          className={classes.button}
          variant="contained"
          color="primary"
        >
          Get Breweries
        </Button>
      </form>
      {props.error && <p className={classes.error}>{error}</p>}
      {isFetching ? (
        <div className={classes.loader}>
          <h2>Loading</h2>
          <Loader type="Grid" color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <div className={classes.root}>
          {breweries.map((brewery) => {
            return <Brewery key={brewery.id} brewery={brewery} />;
          })}
        </div>
      )}
    </div>
  );
};

export default BreweryList;
