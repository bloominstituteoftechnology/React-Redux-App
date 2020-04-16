import React from "react";
import { connect } from "react-redux";
import {dinosaurList} from '../dinoRandomizer'
const DinoText = props => {

    let imageURL = dinosaurList.find(function(o){ return o.name=== "Asiatosaurus" }).url;
    console.log(imageURL)

  return (
    <div >
      {props.isLoading ? (
        <div><img className="img-box" src="http://dinosaurssciencegucci.weebly.com/uploads/9/8/8/7/98876886/cute-dino-walk-by-lancochang-d6tb3vu_orig.gif"></img></div>
      ) : (
        <div>
          {props.error && (
            <div style={{ color: "red" }}>*error loading data*</div>
          )}
          {!props.hasLoaded ? (<div></div>) : (
            <div className="container notification is-bold margin-fixer">
              <h3 className="subtitle"><a target="_blank" href={props.dinoInfo.url}>{props.dinoInfo.name}</a></h3>
              <div className="dino-img"><img src={dinosaurList.find(function(o){ return o.name === props.dinoInfo.name }).url}></img></div>
              <p>{props.dinoInfo.text}</p>
              
            </div>)}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    dinoInfo: state.dinoInfo,
    isLoading: state.isLoading,
    hasLoaded: state.hasLoaded,
    error: state.error
  };
};

//export default DinoText;
export default connect(mapStateToProps, {})(DinoText);
