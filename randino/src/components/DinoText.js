import React from "react";
import { connect } from "react-redux";

const DinoText = props => {
  return (
    <div className="container">
      {props.isLoading ? (
        <div>data loading...</div>
      ) : (
        <div>
          {props.error && (
            <div style={{ color: "red" }}>*error loading data*</div>
          )}
            <div className="notification is-bold margin-fixer">
              <h3 className="subtitle"><a href={props.dinoInfo.url}>{props.dinoInfo.name}</a></h3>
              <p>{props.dinoInfo.text}</p>
            </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dinoInfo: state.dinoInfo,
    isLoading: state.isLoading,
    error: state.error
  };
};

//export default DinoText;
export default connect(mapStateToProps, {})(DinoText);
