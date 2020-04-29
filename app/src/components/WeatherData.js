import React, { useState, useEffect } from "react";
import { Item, Dimmer, Loader, Container } from "semantic-ui-react";
import Axios from "axios";

function WeatherData() {
  const [firstLoadCity] = useState("new york city");
  const [weatherData, setWeatherData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const objectTester = Object.keys(weatherData);
  console.log("Ob Tester", objectTester.length);

  useEffect(() => {
    if (isLoading) {
    } else {
      Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?appid=f9039d5e70b79bc54e8913e14e31a84f&q=${firstLoadCity}&units=imperial`
      )
        .then((res) => {
          setIsLoading(false);
          setWeatherData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isLoading]);

  console.log("weatherData", weatherData);
  return (
    <>
      {Object.keys(weatherData).length === 0 ? (
        <Dimmer active>
          <Loader>Loading...</Loader>
        </Dimmer>
      ) : (
        <Container style={{marginTop: "25px",  width:"50%"}}>
          <Item.Group>
            <Item>
              <Item.Content>
                <Item.Header>{weatherData.name}</Item.Header>
                <Item.Meta>
                  Local Temperature: {Math.floor(weatherData.main.temp)}°
                </Item.Meta>
                <Item.Extra>
                  Feels Like: {Math.floor(weatherData.main.feels_like)}
                </Item.Extra>
                <Item.Extra>
                  High of: {Math.floor(weatherData.main.temp_max)}°
                </Item.Extra>
                <Item.Extra>
                  Low of: {Math.floor(weatherData.main.temp_min)}°
                </Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Container>
      )}
    </>
  );
}

export default WeatherData;
