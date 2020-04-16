import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchJoke} from '../store/fetchJoke'

const DadJoke = (props) => {
    useEffect(()=>{
        props.fetchJoke()
    },
    [])
    return (
        <div>
            <h2>comin' right up</h2>
            <h2>comin' right up</h2>
            {props.isFetching && (<p>getting joke</p>)}
            {props.joke && (<p>{props.joke}</p>)}
            {props.error && (<p>{props.error}</p>)}
        </div>
    )
}

const mapStateToProps = state=>{
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error
}

export default connect(
    mapStateToProps,
    {fetchJoke}
)(DadJoke);

