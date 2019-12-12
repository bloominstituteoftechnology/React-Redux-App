import React from 'react';

import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getCat } from '../actions/catActions';

const Cat = props => {

    return (
        <div>
            <h1>Cat Image</h1>
            {!props.cat && !props.isFetching && <p>Go ahead! Fetch a Cat</p>}
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
            {/* {props.cat && <p>{}</p>} */}
            <button onClick={props.getCat}>Get Cat!</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cat : state.cat,
        isFetching : state.isFetching,
        error : state.error
    }
}

export default connect(
    mapStateToProps,
    { getCat }
)(Cat)