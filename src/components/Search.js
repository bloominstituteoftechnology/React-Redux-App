import React, { useState } from "react";
import { connect } from "react-redux";
import { loadData } from "../actions/index";
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
} from "@material-ui/core";

const Search = (props) => {
  const [id, setId] = useState("");
  const handleChange = (e) => {
    setId(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    props.loadData(id);
  };
  return (
    <Container>
      <Box>
        <Typography variant="h4">Welcome to MTG Booster Simulator</Typography>
        <Typography variant="body1">
          Try pulling a booster for a specific set, i.e. 'Khans of Tarkir' would
          be 'KTK'
        </Typography>
        <Typography variant="body1">
          Core sets don't work, for a full list of expansion codes click{" "}
          <a href="https://en.wikipedia.org/wiki/List_of_Magic:_The_Gathering_sets">
            here
          </a>
        </Typography>
        <TextField
          label="Search"
          name="id"
          value={id}
          onChange={handleChange}
        />
      </Box>
      <Box style={{ margin: "5px" }}>
        <Button variant="contained" onClick={handleClick}>
          Search
        </Button>
      </Box>
    </Container>
  );
};

const mapStatetoProps = (state) => {
  return {
    cards: state.cards,
    isFetching: state.isFetching,
  };
};

export default connect(mapStatetoProps, { loadData })(Search);
