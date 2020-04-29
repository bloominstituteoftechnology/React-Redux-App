import React from "react";
import "./App.css";
import { Divider, Grid, Segment } from "semantic-ui-react";
//components
import PexelsImage from "./components/PexelsImage";
import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <Segment className="App">
        <Grid columns={2} relaxed="very">
          <Grid.Column>
            <PexelsImage />
          </Grid.Column>
        </Grid>
        <Divider vertical />
      </Segment>
      <UserForm />
    </>
  );
}

export default App;
