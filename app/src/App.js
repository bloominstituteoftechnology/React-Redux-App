import React, { useState } from "react";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";

import { connect } from "react-redux";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { createStyles, fade, makeStyles } from "@material-ui/core/styles";

import SearchIcon from "@material-ui/icons/Search";

//import { catsReducer as reducer } from "./reducers/catsReducer";

import CatForm from "./components/CatForm";

import Cat from "./components/Cat";

//const store = createStore(reducer, applyMiddleware(thunk));

const App = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);

  const classes = useStyles();

  const handleFormChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={() => setSearchToggle(false)}
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <Link to={"/"}>
                <img
                  src="https://img.icons8.com/ultraviolet/40/000000/cat.png"
                  alt="cat"
                />
              </Link>
            </IconButton>

            <Typography
              style={{ marginLeft: "3rem", fontSize: "2rem" }}
              className={classes.title}
              variant="h6"
              noWrap
            >
              <Link
                onClick={() => setSearchToggle(false)}
                to={"/"}
                style={{
                  color: "white",
                  fontSize: "2rem",
                  textDecoration: "none",
                }}
              >
                React-Redux Async Cats
              </Link>
            </Typography>

            <Link
              style={{ color: "white" }}
              to={"/"}
              onClick={() => setSearchToggle(false)}
            >
              <img
                src="https://img.icons8.com/ultraviolet/40/000000/cat-footprint.png"
                alt="cat footprint"
              />
            </Link>

            {!searchToggle && (
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>

                <InputBase
                  onChange={handleFormChange}
                  style={{ marginLeft: "2rem" }}
                  placeholder="Search by breed..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>

      <Switch>
        <Route path="/cat/:catID">
          <Cat />
        </Route>
        <Route path="/">
          <CatForm
            searchTerm={searchTerm}
            setSearchToggle={setSearchToggle}
            setSearchTerm={setSearchTerm}
          />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    breeds: state.breeds,
    isFetchingData: state.isFetchingData,
  };
};
export default connect(mapStateToProps, {})(App);

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "24ch",
        },
      },
    },
  })
);

// {`item${props.item.purchased ? " purchased" : ""}`}classes.search
