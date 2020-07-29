import React from 'react';

import sky from '../../resources/sky.mp4';

import './Background.css';

const Background = props => {
    return(
        <div className='background'>
            <video autoPlay loop muted>
                <source src={sky} type="video/mp4" />
            </video>
        </div>
    );
};

export default Background;