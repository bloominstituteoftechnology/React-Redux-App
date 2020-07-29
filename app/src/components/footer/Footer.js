import React from 'react';

import './Footer.css';

const Footer = props => {
    return (
        <div className='site-footer'>
            <p>Weather data provided by <a href='https://www.metaweather.com/'>MetaWeather</a></p>
        </div>
    );
};

export default Footer;