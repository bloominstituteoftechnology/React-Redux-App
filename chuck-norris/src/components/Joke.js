import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getJoke } from '../actions'

const Joke = (props) => {
    
    useEffect(() => {

    },[]);

    if (props.loading) {
        return <><h2>Loading...</h2></>;
    }


    return (
        <>
            <h2>{props.joke}</h2>
            <button onClick={() => props.getJoke()}>Get new joke</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        joke: state.joke,
        error: state.error,
        loading: state.loading
    }
}

const mapDispatchToProps = {getJoke}

export default connect(mapStateToProps, mapDispatchToProps)(Joke);