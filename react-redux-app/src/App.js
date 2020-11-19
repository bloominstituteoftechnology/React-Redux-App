// Import Dependencies
import React from "react";

// Import Assets
import "./App.css";
import DealList from "./components/DealList";
import DealsForm from "./components/DealsForm";

function App() {
  return (
    <div className='App'>
      <DealsForm />

      <DealList />
    </div>
  );
}

export default App;
