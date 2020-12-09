import React from "react";
import { connect } from "react-redux";
import Player from "./Player";
import Dealer from "./Dealer";

import { getPlayerCard, getDeck, dealCards } from "../actions";

const Card = ({
  deckID,
  cardsRemaining,
  isShuffling,
  isDealing,
  playerCards,
  dealerCards,
  isFetchingCard,
  error,
  playerTotal,
  dealerTotal,
  getPlayerCard,
  getDeck,
  dealCards,
}) => {
  if (error) {
    return <h2>We got an error: {error}</h2>;
  }
  if (isShuffling) {
      return <h2>Shuffling deck...</h2>
  }
  if (isDealing) {
      return <h2>Dealing cards...</h2>
  }
//   if (isFetchingCard) {
//     return <h2>Hitting...</h2>;
//   }

  const handleGetDeck = () => {
    getDeck();
  };
  const handleDealCards = () => {
    dealCards(deckID);
  };
  const handlePlayerHit = () => {
    getPlayerCard(deckID);
  };
  const handleDealerHit = () => {
    getPlayerCard(deckID);
  };

  return (
    <div>
        {isFetchingCard ? <h2>Hitting...</h2> : null}
      <div className="dealer-cards">
          {dealerCards ? <Dealer cards={dealerCards} /> : null}
      </div>
      <div className="player-cards">
          {playerCards ? <Player cards={playerCards} /> : null}
      </div>
      <p>Cards remaining in deck: {cardsRemaining}</p>
      {playerCards ? <button onClick={handlePlayerHit}>Hit</button> : null}
      {playerCards ? <button onClick={handleDealerHit}>Stay</button> : null}
      {deckID ? null : <button onClick={handleGetDeck}>Get New Deck</button>}
      {deckID && !playerCards ? <button onClick={handleDealCards}>Play</button> : null}
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    deckID: state.deckID,
    cardsRemaining: state.cardsRemaining,
    isShuffling: state.isShuffling,
    isDealing: state.isDealing,
    playerCards: state.playerCards,
    dealerCards: state.dealerCards,
    isFetchingCard: state.isFetchingCard,
    error: state.error,
    playerTotal: state.playerTotal,
    dealerTotal: state.dealerTotal,
  };
};

export default connect(mapStateToProps, { getPlayerCard, getDeck, dealCards })(Card);
