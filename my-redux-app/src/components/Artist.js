import React from "react";
import { connect } from "react-redux";
import { toggleArtist } from "../action/artist";

function Artist(props) {
  return (
    <Form>
      <input type='text' value={props.enabled} onChange={props.toggle} />
      <span>Song Lyrics</span>
    </Form>
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