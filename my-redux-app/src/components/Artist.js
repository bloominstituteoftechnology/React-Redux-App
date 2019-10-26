import React from "react";
import { connect } from "react-redux";
import { toggleArtist } from "../actions/theme";

function Artist(props) {
  return (
    
  );
}

function mapStateToProps(state) {
    return {
    enabled: state.artist
    };
  }
  
  const mapDispatchToProps = {
    toggle: toggleArtist
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Artist);