import React from "react";
import { connect } from "react-redux";
import Player from "./Player";
import Dealer from "./Dealer";

import { getCard, getDeck, dealCards } from "../actions";

const Card = ({
  deckID,
  cardsRemaining,
  isShuffling,
  isDealing,
  playerCards,
  dealerCards,
  isFetchingCard,
  error,
  getCard,
  getDeck,
  dealCards,
}) => {
  if (error) {
    return <h2>We got an error: {error}</h2>;
  }
  if (isShuffling) {
      return <h2>Shuffling deck</h2>
  }
  if (isDealing) {
      return <h2>Dealing cards</h2>
  }
  if (isFetchingCard) {
    return <h2>Fetching card</h2>;
  }

  const handleGetDeck = () => {
    getDeck();
  };
  const handleDealCards = () => {
    dealCards(deckID);
  };
  const handleGetCard = () => {
    getCard();
  };

  return (
    <div>
      {deckID ? <button onClick={handleDealCards}>Play</button> : <button onClick={handleGetDeck}>Get New Deck</button>}
      {playerCards ? <button onClick={handleGetCard}>Hit</button> : ""}
      <div className="dealer-cards">
          {dealerCards ? <Dealer cards={dealerCards} /> : null}
      </div>
      <div className="player-cards">
          {playerCards ? <Player cards={playerCards} /> : null}
      </div>
      Cards remaining in deck: {cardsRemaining}
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
  };
};

export default connect(mapStateToProps, { getCard, getDeck, dealCards })(Card);
