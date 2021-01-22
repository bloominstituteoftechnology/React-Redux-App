import React from 'react';
import { getLyrics } from '../actions/index';
import { connect } from 'react-redux';

const LyricsForm = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.getLyrics();
  };
  return (
    <>
      <form>
        <input placeholder='Artist' />
        <input placeholder='Song Title' />
        <button onClick={handleClick}>Search for lyrics</button>
      </form>
    </>
  );
};
const mapStateToProps = (state) => {
  return { lyrics: state.lyrics };
};
export default connect(mapStateToProps, { getLyrics })(LyricsForm);
