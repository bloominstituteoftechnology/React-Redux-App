import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import axios from "axios";


import { animeReducer as reducer } from "./reducers/animeReducer";
import AnimeList from "./components/AnimeList";
import FetchButton from "./components/FetchButton";



const store = createStore(reducer, applyMiddleware(thunk));

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <h1>TOP ANIMES OF 2020</h1>
        <FetchButton />
        <AnimeList />
      </div>
    </Provider>
  );
}

export default App;




// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
