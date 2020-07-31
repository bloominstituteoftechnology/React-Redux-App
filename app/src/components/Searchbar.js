import React from 'react';

import { connect } from 'react-redux';

const Searchbar = props => {

    return (
        <form>
            <input
                type='text'
                name='dogs'
                placeholder='Search Breeds'
            />
            <button className='App-btn'>Search</button>
        </form>
    )
};

const mapStateToProps = state => {
    return {
        dogs: state.dogs
    }
}

export default connect(
    mapStateToProps,
    {}
)(Searchbar);