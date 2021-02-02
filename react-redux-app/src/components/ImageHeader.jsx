import React from 'react';
import { connect } from 'react-redux';

import { getImage } from '../actions';

const ImageHeader = ({ dispatch, ...props }) => {
    const handleClick = (e) => {
        e.preventDefault();
        props.getImage();
    };
    return (
        <div>
            <h1>Random Images</h1>
            <h3>Click the pretty button for a a random image</h3>
            <h5>You know you want to!</h5>
            <button
                className="massive ui inverted primary button"
                onClick={handleClick}
            >
                Get Image Now!
            </button>
            {}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        state
    };
};

export default connect(mapStateToProps, { getImage })(ImageHeader);
