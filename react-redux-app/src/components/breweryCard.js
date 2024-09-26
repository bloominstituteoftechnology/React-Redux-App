import React from 'react';

import { Card, Icon } from 'semantic-ui-react';

const BreweryCard = (props) => {
  const { name, brewery_type, city, state, country, website_url } = props.item
  // console.log(props);
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>Location: {city}, {state} <br/> {country}</Card.Description>
        <Card.Description>Brewery type: {brewery_type}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a href={website_url} alt="brewery website">
          <Icon name='linkify' />{website_url}
        </a>
      </Card.Content>
    </Card>
  )
}

export default BreweryCard;