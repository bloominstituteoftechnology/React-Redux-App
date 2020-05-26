import React from "react";
import BreweryList from "./components/BreweryList";
import { CssBaseline, Container } from "@material-ui/core";

function App() {
  return (
    <CssBaseline>
      <Container>
        <div className="App">
          <BreweryList />
        </div>
      </Container>
    </CssBaseline>
  );
}

export default App;