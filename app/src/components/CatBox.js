import React from "react";
import { connect } from "react-redux";

const CatBox = props => {
  //console.log("CatBox ~ ",props);

  return (
    <div>
      {props.file == "" ? (
        <div>Click get data to see cats</div>
      ) : (
         <img src={props.file.file} alt="CatPhoto" />
      )}     
    </div>
  );
};

const mapStateToProps = state => {
  return {
    file: state.file,
    error: state.error
  };
};
export default connect(
  mapStateToProps,
  {}
)(CatBox);
