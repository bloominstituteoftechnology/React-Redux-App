import React from "react";
import BreweryList from "./components/BreweryList";
import { CssBaseline, Container } from "@material-ui/core";
import "./index.css";

function App() {
  return (
    <CssBaseline>
      <Container>
        <div>
          <BreweryList />
        </div>
      </Container>
    </CssBaseline>
  );
}

export default App;
