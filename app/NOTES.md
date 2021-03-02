## OPEN Whale Siting API

http://hotline.whalemuseum.org/api

## Install redux

  npm install redux
  npm install react-redux
  npm install --save-dev redux-devtools

## Install react router dom
  npm install react-router-dom

    import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

## Intsall redux-logger

  npm i --save redux-logger
  or
  npm add redux-logger


  import logger from 'redux-logger'; 
  or
  import { applyMiddleware, createStore } from 'redux';

## Install redux- thunk

  npm install --save redux-thunk

  import thunk from 'redux-thunk';




## REDUX 

  STEP 1 - create a store
    const store = createStore(rootReducer, applyMiddleware(logger,thunk));


  STEP 2 - provide the store
    import { Provider } from 'react-redux';

  STEP 3 - connect to components
    const mapStateToProps = 90 => {
      return {
      editing: state.editing,
      title: state.title
      }
    } // mapping state so we can read it

    mapDispatchToProps = () => {
      updateTitle: (title) => dispatch(updateTitle(title))
      toggleEditing: dispatch(toggleEditing());
    } // mapping dispatch so we can create actions and write

    export default connect(mapStateToProps, mapDispatchToProps)(Component);



  ## Axios
    npm install axios
    import axios from 'axios';