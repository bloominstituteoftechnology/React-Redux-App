import React from "react";

const WeatherCard = ({ forecast }) => {
  return (
    <div className="card">
      <h1>Weather for: {forecast.applicable_date}</h1>
      <h2>Currently: {forecast.weather_state_name}</h2>
      <h3>Current Temp: {forecast.the_temp}°c</h3>
      <h3>Max Temp: {forecast.max_temp}°c</h3>
      <h3>Min Temp: {forecast.min_temp}°c</h3>
    </div>
  );
};

export default WeatherCard;
