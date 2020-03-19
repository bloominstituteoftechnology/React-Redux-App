import React from "react";
import { connect } from "react-redux";

import { getData } from "../actions";

const CatsList = props => {
    //console.log("Cats List ~ ", props);

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };

    return (
        <div>
            {props.isFetchingData ? (
                <div>fetching data</div>
            ) : (
                <button onClick={handleGetData}>Get Data</button>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        file: state.file,
        isFetchingData: state.isFetchingData
    };
};

export default connect(
    mapStateToProps,
    { getData }
)(CatsList);
