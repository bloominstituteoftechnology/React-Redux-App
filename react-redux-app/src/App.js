import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
// import  Home  from "./components/Home";
// import  About  from "./components/About";
// import  Contact  from "./components/Contact";
// import  Planet  from "./components/Planet";
import './App.css';

const App = () => (
  <Router>
      <div>
          <ul>
              <li>
                  <Link to="/">Home</Link>
              </li>
              <li>
                  <Link to="/about">About</Link>
              </li>
              <li>
              <Link to="/contact">Contact</Link>
              </li>
          </ul>
      </div>
      <hr />
      
      {/* <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/planet/:id" component={Planet}/> */}
  </Router>
);

export default App;