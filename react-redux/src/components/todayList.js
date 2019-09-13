import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import Today from "./today";
import { Button, Card } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const TodayList = props => {
  return (
    <Card>
      <h2>I am a component</h2>
      <Button fluid onClick={() => props.getData()}>
        {props.isLoading ? "error" : "Get NASA Data"}
      </Button>
      {props.stuff &&
        props.stuff.map(item => <Today key={item.name} stuff={item} />)}
    </Card>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    stuff: state.stuff
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(TodayList);