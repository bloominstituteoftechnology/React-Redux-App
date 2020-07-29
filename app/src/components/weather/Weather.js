import React from 'react';
import { connect } from 'react-redux';

import { fetchWeather } from '../../actions/weatherActions';

import * as MUI from '../../materialui/index';

import './Weather.css';

const Weather = (props) => {
    const fetchWeather = e => {
        e.preventDefault();
        props.fetchWeather();
    };

    return (
        <div className='weather-container'>
            {!props.weather['consolidated_weather'] ? (
                <h3>N/A</h3>
            ) : (
                <>
                    <section className='location'>
                        <p>Erie, PA</p>
                    </section>
                    <section className='weather-conditions'>
                        <p>{props.weather['consolidated_weather'][0].weather_state_name}</p>
                        <img alt='weather icon' src={`https://www.metaweather.com/static/img/weather/${props.weather['consolidated_weather'][0].weather_state_abbr}.svg`} />
                        <p className='temp'>
                            {Math.round(props.weather['consolidated_weather'][0].the_temp)}
                        </p>
                    </section>
                </>
            )}
            {props.isFetching ? (
                <MUI.CircularProgress />
            ) : (
                <MUI.Button
                    color='primary'
                    variant='contained'
                    onClick={fetchWeather}
                >
                    Fetch Weather
                </MUI.Button>
            )}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        weather: state.weather,
        error: state.error,
        isFetching: state.isFetching
    };
};

export default connect(mapStateToProps, { fetchWeather })(Weather);