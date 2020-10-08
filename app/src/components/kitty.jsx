import React from 'react';
import { connect } from 'react-redux';
import {fetchActivity} from '../actions/';
import Loader from 'react-loader-spinner';
import "../App.css"
import ResizeImage from 'react-resize-image'


const Kitty = (props) =>{
    // 
    console.log('kitty', props)
    return(
        <div className="kitty">

        <img className="photo"
         src={props.catImage}
          />
        {!props.catImage&& !props.isLoading && (
          <h2>Ready to put a smile on your face?</h2>
        )}
        {props.isLoading && (
          <Loader
            type="Puff"
            color="#FF3333"
            height={80}
            width={80}
            timeout={8000} 
          />
        )}
        {props.catImage && !props.isLoading && <h2>{props.catImage.activity}</h2>}

        <button onClick={props.fetchActivity}>Show me the kitties!</button><br/>
      </div>
    )
}
const mapStateToProps = (state) =>{
    return{isLoading: state.isLoading,
    catImage: state.catImage,
    error: state.error}
}
export default connect(mapStateToProps, {fetchActivity})(Kitty);