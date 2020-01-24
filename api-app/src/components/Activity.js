import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner'

import {fetchActivity} from '../actions'

const Activity = props => {
    return (
        <div>
            <button onClick={props.fetchActivity}>Get Activity</button>
            {!props.activity && !props.isLoading && (<h2>Yasss!!!!</h2>)}
            {props.isLoading &&
                (<Loader 
                type="ThreeDots" 
                color="#somecolor" 
                height={80} 
                width={80} />)}
            {props.activity && !props.isLoading && (
                <h2>{props.activity.activity}</h2>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        activity: state.activity,
        error: state.error
    }
}

export default connect (
    mapStateToProps,
    {fetchActivity}
)(Activity);