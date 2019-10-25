import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDog } from "../actions/Nope";

function Nope(props) {
  useEffect(() => {
    props.fetchDog();
  }, []);

  return (
    <div >

      {props.dogError && <p>Error: {props.dogError}</p>}

      {props.isDogLoading ? (
        <div className="spinner" />
      ) : (
        <img src={props.dogImage} alt="Good Boy" />
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {    
    isDogLoading: state.dog.isLoading,
    dogImage: state.dog.dog,
    dogError: state.dog.error
  };
}

const mapDispatchToProps = {
  fetchDog
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nope);