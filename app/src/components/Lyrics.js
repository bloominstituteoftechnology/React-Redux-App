import React from 'react';
import { connect } from 'react-redux';

const Lyrics = (props) => {
  return (
    <>
      <p>{props.lyrics}</p>
    </>
  );
};

export default connect((state) => {
  return { lyrics: state.lyrics };
})(Lyrics);
