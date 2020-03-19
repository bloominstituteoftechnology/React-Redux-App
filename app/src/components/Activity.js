import React from 'react';
import { connect } from 'react-redux';
import { fetchActivity } from '../actions';
import Loader from 'react-loader-spinner';

const Activity = (props) => {
    return (
        <div>
            <button onClick={props.fetchActivity}>Get Image</button>
            {!props.message && !props.isLanding && (
            <h2>Go ahead and fetch a new image!</h2>
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
            {props.message && !props.isLoading && (
            <div className="dog-frame">
                <img className="dog-image" src={props.message.message} alt="dog image"/>
            </div>
            )}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        message: state.message,
        error: state.error
    }
}
export default connect(
    mapStateToProps, 
    { fetchActivity }
)(Activity);