import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import { connect } from "react-redux";
import { fetchWeather } from "./store/actions/index";
import WeatherForm from "./components/WeatherForm";

const App = (props) => {
  const { fetchWeather } = props;
  const [url, setUrl] = useState(
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/2430683/"
  );

  useEffect(() => {
    fetchWeather(props.woeid);
  }, [fetchWeather, props.woeid]);
  console.log(props);
  return (
    <div className="App">
      <h1>
        {props.isLoading ? "Loading location" : <h1>{props.weather.title}</h1>}
      </h1>
      <WeatherForm />
      {props.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        props.weather.consolidated_weather.map((forecast) => {
          return <WeatherCard key={forecast.id} forecast={forecast} />;
        })
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    woeid: state.woeid,
    isLoading: state.isLoading,
  };
};

export default connect(mapStateToProps, { fetchWeather })(App);
