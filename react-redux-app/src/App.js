import React from "react";
import Title from './components/title';
import Recipes from './components/recipes';

import "bootstrap/dist/css/bootstrap.css";
import "./App.css"

function App() {

  return (
    <div className="parallax-bg jumbotron" style={{minHeight: '100vh'}}>
      <div className="d-flex flex-column justify-content-center">
       
      <Title /> 
      <Recipes /> 
     </div>  
     </div>

  );
}

export default App;
