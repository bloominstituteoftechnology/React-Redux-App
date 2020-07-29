import React from 'react';

import { connect } from 'react-redux';
import { fetchDogPictures } from './actions/actionIndex';


const Header = props => {

    return (
        <div style={{ background: 'rgba(102,68,0,0.7)' }}>
            <form>
                <input
                    type='text'
                    name='dogs'
                    placeholder='Search Breeds'
                />
                <button className='App-btn'>Search</button>
            </form>
            <h1>I LOVE DOGS</h1>
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