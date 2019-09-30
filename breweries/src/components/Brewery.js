import React from 'react';

const Brewery = (props) => {
  return (
    <div>
      <h1>{props.breweryName}</h1>
      <p>{props.address}</p>
    </div>
  )
}

export default Brewery