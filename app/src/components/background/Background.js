import React from 'react';

import sunset from '../../resources/sunset.mp4';

import Header from '../header/Header';
import Weather from '../weather/Weather';
import Footer from '../footer/Footer';

import './Background.css';

const Background = props => {
    return(
        <>
        <div className='background'>
            <div className='color-overlay'></div>
            <video autoPlay loop muted>
                <source src={sunset} type="video/mp4" />
            </video>
        </div>
        <Header />
        <Weather />
        <Footer />
        </>
    );
};

export default Background;