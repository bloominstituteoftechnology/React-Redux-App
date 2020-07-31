import React from 'react';

import { connect } from 'react-redux';
import { fetchDogPictures } from './actions/actionIndex';


const Header = props => {

    return (
        <div style={{ background: 'rgba(102,68,0,0.7)' }}>
            <h1>I LOVE DOGS</h1>
            <h3>(random terriers)</h3>
            <button className='App-btn' onClick={props.fetchDogPictures}>Fetch Dog Pictures</button>

        </div>
    )
};

const mapStateToProps = state => {
    return {
        isFetching: state.isFetching,
        dogs: state.dogs,
        error: state.error
    }
}

export default connect(
    mapStateToProps,
    { fetchDogPictures }
)(Header);