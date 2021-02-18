import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getBrewery } from "../actions"


const BreweryList = (props) => {
    const { breweries, isFetching, error, fetchBreweryLoading, count } = props;

    const handleClick = () => {
        props.getBrewery();

    }

    useEffect(() => {
        props.getBrewery();
    }, []);

    if (error) {
        return(
            <h2> We got an error! As follows: {error}</h2>
        )
    };

    if (isFetching) {
        return(
            <h2>Standby while we fetch the brewery list...</h2>
        )
    }

    if (props.count < 0) {
        return(
            <h2> Please wait </h2>
        )
    }

    const position = props.count - 1;

    return (
        <div>
            <h1>Brewery Wanderer</h1>
            <h3>Current place in brewery list: {props.count}</h3>
            <button onClick={handleClick}> Reload List </button>
            <div className="brewery">
                Have you tried {props.breweries[position]}?
            </div>
            <div>
            </div>
        </div>
    )
};

const mapStateToProps = state => {
    return{
        breweries: state.breweries,
        isFetching: state.isFetching,
        error: state.error,
        count: state.count
    };
};

export default connect(mapStateToProps, { getBrewery })(BreweryList)


