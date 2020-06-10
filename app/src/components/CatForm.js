import React, { useState } from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

const CatForm = (props) => {
  //onClick handler
  const handleGetDataOnClick = (e) => {
    e.preventDefault();
    props.getData();
  };

  return (
    //if data is fetching show this div if not show button.
    //We can check to see if it's working by going back into the reducer and changing the default state to see if it renders 'fetching'

    <>
      {props.isFetchingData ? (
        //transition first and then transition to receiving data frmo the API call and then on to something else
        // with Redux we do not have a way to do that. all we can do is pass in action creators that create actions that are dispatched by redux
        //this is where we need "redux thunk" middleware
        //thunk inserts between action creators and reducers and does something based on what action creator returns
        //if we want to trap some actions we have to do is pass back a function that does not return an object but that returns a function
        //so we can call fn with dispatch method allows whatever sent the function allow them acces to the dispatch to dispatch any other actions

        <div>**Now fetching data**</div>
      ) : (
        //we want the button to transition to isFetchingData
        //need to create a handler variable above and then pass down
        <button onClick={handleGetDataOnClick}>Get Cats</button>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    //what state are we intersted in here?
    isFetchingData: state.isFetchingData,
  };
};

//pass in action getData into connect so redux can enhance the action and pass in as prop
export default connect(mapStateToProps, { getData })(CatForm);
