import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";

const Card = props => {
    const handleGetData = event => {
        event.preventDefault();
        props.getData();
    }
    return (
        <div>
            {props.isFetchingData ? (
                <div>Fetching Pokemon...</div>
                ) : (
                <button onClick={handleGetData}>Get Pokemon</button>
                )}
        </div>
    )
}

const mapStateToProps = state => {
    return {

        isFetchingData: state.isFetchingData

    }
}

export default connect(mapStateToProps, { getData })(Card)