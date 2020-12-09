import React from 'react';
import { connect } from 'react-redux';

import { getCard } from '../actions';

const Card = ({ card, isFetching, error, getCard }) => {

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
      if (isFetching) {
        return <h2>Fetching card!</h2>;
      }
    
      const handleClick = () => {
        getCard();
      }

    return (
        <div>
            <button onClick={handleClick}>Get Card</button>
            <div>
                <img src={card} alt={card}/>
            </div>
        </div>
        
    )
}

const mapStateToProps = state => {
    return {
        card: state.card,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getCard })(Card);