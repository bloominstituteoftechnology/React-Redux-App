import React from "react";
import { connect } from "react-redux";
import { getRandomUserData } from "../actions";

const UserData = props => {
  return (
    <div>
      <button
        onClick={() => {
          props.getRandomUserData();
        }}
      >
        Get Random Yeezy Quote
      </button>
      {props.error && <div>{props.error}</div>}
      {props.isloading ? (
        <div>loading...</div>
      ) : (
        <section>
          <h1>{props.user.name}</h1>
          <h2>{props.user.quote}</h2>
        </section>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isloading: state.isloading,
    error: state.error,
    user: state.user
  };
};

export default connect(mapStateToProps, { getRandomUserData })(UserData);
