import React from 'react'
import { Item, Dimmer, Loader } from "semantic-ui-react";

function WeatherData() {
    return (
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
    )
}

export default WeatherData
