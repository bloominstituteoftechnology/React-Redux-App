import React, { useEffect } from 'react';
import { connect } from 'react-redux'; // to bring in state
import DogPics from './DogPics'




const Dogs= props => {
  if (props.isFetching){
      //usually a spinner
      return<h2>Loading Dog Pics...</h2>
  }

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.dogPics.map(pic =>(
          <DogPics key={pic.id}/>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dogPics: state.dogPics,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
)(Dogs);