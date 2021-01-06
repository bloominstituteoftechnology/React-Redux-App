import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import { Button } from 'reactstrap';
const Card = (props) => {
  const handleGetData = (event) => {
    props.getData();
  };
  return (
    <div>
      {props.isFetchingData ? (
        <div>One Sec...</div>
      ) : (
        <Button onClick={handleGetData} color="primary">Get Pokemon</Button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetchingData: state.isFetchingData,
  };
};

export default connect(mapStateToProps, { getData })(Card);
