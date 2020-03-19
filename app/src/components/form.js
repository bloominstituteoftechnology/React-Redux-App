import React from 'react';
import {connect} from 'react-redux';
import {getQuotes} from "../action/action";

const Form = props => {
    const data = e => {
        e.preventDefault();
        props.getQuotes();
    };

    return (
        <>
        {props.isFetchingData ? (
            <h4>Looking for good enough Quote...</h4>
        ): (
            <button onClick={data}>Get Quote</button>
        )}
        </>
    )
    }

    const mapProps = state => {
        return{
            isFetchingData: state.isFetchingData
        }
}

export default connect(mapProps, {getQuotes})(Form)