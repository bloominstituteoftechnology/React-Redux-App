import React from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../../actions/weatherActions';

import './Weather.css';

const Weather = (props) => {
    const fetchWeather = e => {
        e.preventDefault();
        props.fetchWeather();
    };

    return (
        <div className='weather-container'>
            <button
                onClick={fetchWeather}
            >
                Fetch Weather
            </button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        weather: state.weather,
        error: state.error
    };
};

export default connect(mapStateToProps, { fetchWeather })(Weather);