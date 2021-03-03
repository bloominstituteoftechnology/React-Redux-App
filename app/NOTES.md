## OPEN Whale Siting API

http://hotline.whalemuseum.org/api

##  Google MAP API

https://developers.google.com/maps/documentation/maps-static/start

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

  ## Material UI

    npm install @material-ui/core
    npm install @material-ui/icons

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

  ## REDUX STEPS

  > CREATE THE STORE

    import { applyMiddleware, createStore } from 'redux';
    import { Provider } from 'react-redux';
    import logger from 'redux-logger';
    import thunk from 'redux-thunk';

    const store = createStore(appReducer, applyMiddleware(logger,thunk));

  >  PROVIDE THE STORE - wrap the app in Provider component
          
          <Provider store={store}>
            <App />
          </Provider>

  > CONNECT THE STORE TO COMPONENTS

    import { connect } from "react-redux";

  // Redux step 3: connect components

const mapStateToProps = (state) => {
  return {
    editing: state.editing,
    title: state.title
  }
};

const mapDispatchToProps = { updateTitle, toggleEditing };

export default connect(mapStateToProps, mapDispatchToProps)(Title);

// connect(mapStateToProps,mapDipatchToProps) returns a decorator function
// We then invoke that decorator on Title
// and magically, Title can now read from and write to the store
