import React from "react";
import Title from './components/title';
import Recipes from './components/recipes';

import "bootstrap/dist/css/bootstrap.css";

function App() {

  return (
    <div className="App">
      <Title /> 
      <Recipes /> 
     </div>  
  );
}

export default App;
