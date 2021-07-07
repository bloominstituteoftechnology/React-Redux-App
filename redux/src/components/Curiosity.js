import React, { useState } from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';

import {fetchActivity} from '../actions'

const Activity = props => {
  // const [mars, setMars] = useState(0);
  // const [day, setDay] = useState(0);
  // const [camera, setCamera]= useState("RHAZ")

  // const handleChange = event => {
  //   setDay(event.target.value);
  // };

  // const handleSubmit = e => {
  //   setCamera(e.target.value);

  // }
    return (
      <div>
        <button onClick={props.fetchActivity}>Get Photos</button>
        {!props.activity && !props.isLoading && (
          <h2>Go ahead and fetch Mars photos!</h2>
        )}
        {props.isLoading && (
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
       {props.activity && !props.isLoading && 
       <h2>{props.activity.activity}</h2>}

           
       
       }
    </div>
  );
};
  
  const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      activity: state.activity,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchActivity }
  )(Activity);
  