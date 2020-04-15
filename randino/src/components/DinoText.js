import React from "react";
import { connect } from "react-redux";

const DinoText = props => {
  return (
    <div>
      {props.isLoading ? (
        <div>data loading...</div>
      ) : (
        <div>
          {props.error && (
            <div style={{ color: "red" }}>*error loading data*</div>
          )}
          <div>
              <h3>{props.dinoInfo.name}</h3>
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
