import React from 'react';
import { connect } from 'react-redux';
import {fetchActivity} from '../actions/';
import Loader from 'react-loader-spinner';


const CatCard = (props) =>{
    // 
    console.log('cat', props)
    return(
        <div class='content'>
        
        <button onClick={props.fetchActivity}>Get Cats!</button><br/>
        <img src={props.catImage}/>
        {!props.catImage&& !props.isLoading && (
          <h2>Go ahead a call for a kitty!</h2>
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
        {props.catImage && !props.isLoading && <h2>{props.catImage.activity}</h2>}
      </div>
    )
}
const mapStateToProps = (state) =>{
    return{isLoading: state.isLoading,
    catImage: state.catImage,
    error: state.error}
}
export default connect(mapStateToProps, {fetchActivity})(CatCard);