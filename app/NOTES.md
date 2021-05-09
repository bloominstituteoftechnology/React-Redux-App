## OPEN Whale Siting API

http://hotline.whalemuseum.org/api

##  Google MAP API

https://developers.google.com/maps/documentation/maps-static/start
API KEY: AIzaSyASnLGhffYBRZ60GqFHOYBSoPiHpW_kJSE

EXAMPLE:

https://maps.googleapis.com/maps/api/staticmap?center=7.480785,80.3402663&zoom=12&size=400x400&maptype=hybrid&key=YOUR_API_KEY

## Create New React App
npx create-react-app my-app
cd my-app
npm start


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

## Install Greensock
  npm install gsap

  import { gsap } from "gsap";

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

  ## Install Notinstack

  https://github.com/iamhosseindhv/notistack

  npm install notistack

  > Wrap the App

  import { SnackbarProvider } from 'notistack';

  <SnackbarProvider maxSnack={3}>
      <App />
  </SnackbarProvider>

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

## GOALS for today

* React Router
* Protected Routes
* `axios` package
* AJAX
* Promises
* Authentication tokens


## Mock Server Listens on Port 5000

[] npm i
[] npm start

> server endpoints

  app.post("/api/login", (req, res) => {
    const { username, password } = req.body;
    // Simulating an actual login flow, which would check against a user db:
    if (username === "Whale Lover" && password === "i<3Whales") {
      req.loggedIn = true;
      res.status(200).json({
        payload: token // Diagram step 2 is sending this token back to the client
      });

  app.post("/api/logout", (req, res) => {

  app.get("/api/data", authenticator, (req, res) => {


