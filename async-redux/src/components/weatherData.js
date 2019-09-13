import React from "react";

const WeatherData = props => {
  console.log(props);
  return (
    <div className="weatherBox">
      <h2>{props.weather[props.index].title}</h2>
      <h4>{props.weather[props.index].parent.title}</h4>
      {props.weather[props.index].consolidated_weather.map(day => {
        return (
          <div className="each-weather">
            <h4>Date: {day.applicable_date}</h4>
            <p>Temperature: {day.the_temp} Celsius</p>
            <p>Outside Look: {day.weather_state_name}</p>
            <img
              src={`https://www.metaweather.com//static/img/weather/png/64/${
                day.weather_state_abbr
              }.png`}
              alt={`${day.weather_state_name}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default WeatherData;