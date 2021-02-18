import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDog, fetchDogLoading, fetchDogSuccess, fetchDogFail } from '../actions/action';

const Dog = (props) => {
    const { message, isFetching, error} = props;

    const handleClick = () => {
        props.getDog();
    }

    useEffect(() => {
        props.getDog();
    }, []);

    if (error) {
        return <h2>Error happened when fetching data: {error}</h2>;
    }

    if (isFetching) {
        return <h2>Fetching a cute dog for you!</h2>;
    }

    return (
        <>
            <h2>Enjoy your pupper:</h2> <img src = {message} alt=''/> <br/>
            <button onClick={handleClick}>Get a new puppy</button>
        </>
    )
}

const mapStateToProps = state => {
    return {
        message: state.message,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getDog })(Dog);