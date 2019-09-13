import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions";
import WeatherData from "./weatherData";

const Weather = props => {
  return (
    <div>
      <button onClick={props.getData}>
          Check the Weather
      </button>
      {props.weather &&
        props.weather.map((data, index) => (
          <WeatherData
            key={index}
            weather={props.weather}
            index={index}
            dummy={data}
          />
        ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    weather: state.weather
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(Weather);