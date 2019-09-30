import React from 'react';
import Brewery from './Brewery'

const Breweries = (props) => {
  return (
    <div>
    {props.isFetching ? (<p>We are gathering a list of breweries!</p>) : 
    (
    <div>
    {props.breweries.map( (brewery) =>  <Brewery key={brewery.id} breweryName={brewery.name} address={brewery.street} />)}
    </div>)}
    </div>
  )}

export default Breweries