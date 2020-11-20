import React, {useState, useEffect} from "react";
import './App.css';
import { createStore, applyMiddleware } from "redux";
import {Provider} from 'react-redux';
import rootReducer from "./reducers"
import Title from "./components/Title"
import Search from "./components/Search";
import thunk from "redux-thunk";
// import axios from "axios";




const store  = createStore(rootReducer, applyMiddleware(thunk))

function App() {

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   axios
  //   .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-08-27")
  //   .then(( response => {
  //     setData(response.data)
  //     console.log(response)
  //   }))
  //   .catch((error) => console.log(error));
  // }, [])




  return (
    <Provider store={store}>
    <div>
      <h1>Nasa Photos</h1>
      <Search/>
      <Title/>
    </div>
    </Provider>
  );
}

export default App;
