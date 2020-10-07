import React from 'react';
import { connect } from 'react-redux';
import { Card } from 'semantic-ui-react';

const Price = (props) => {
  return (
    <div className="price-card">
      <Card>
        <Card.Content>
          <Card.Header>{props.price.name} </Card.Header>
          <Card.Description>Price: ${props.price.quotes.USD.price}</Card.Description>
          <Card.Description>Rank: {props.price.rank}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    prices: state.prices
  }
}

export default connect(mapStateToProps, {})(Price)