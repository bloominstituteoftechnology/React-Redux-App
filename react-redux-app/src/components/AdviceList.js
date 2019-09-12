import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getAdvice } from "../actions/actions.js";

function AdviceList(props) {

    useEffect(() => {

        // run action creator when the component mounts
        props.getAdvice();

      }, [getAdvice]);
    
      if (props.isFetching) {
        return <h3>Loading great advice!</h3>;
      }
      
      console.log("advice here: ", props.advice);
    
      return (
        <div>
          <h2>{props.advice}</h2>
          
          <button onClick={props.getAdvice}>I Need Advice</button>
        </div>
      );  

}

const mapStateToProps = state => {
    return {
      advice: state.advice,
      isFetching: state.isFetching,
      error: state.error
    };
};
  

export default connect(
    mapStateToProps,
    { getAdvice }
)(AdviceList);