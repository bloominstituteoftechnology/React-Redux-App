import React from 'react';
import {connect} from 'react-redux';
import {getName} from '../actions';

const Name = props => {
    return(
        <div>
            <h1>NIPPON NAMES</h1>
            {!props.name && !props.isFetching && <p>Who's this?</p>}
            {props.isFetching}
            {props.name && <p>{props.name.name}</p>}
            <button onClick={props.getName}>Click for a Japanese Name</button>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        name: state.name,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect (
    mapStateToProps,
    {getName}
)(Name);
