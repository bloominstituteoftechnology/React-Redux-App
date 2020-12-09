import {
    FETCHING_DECK_START,
    FETCHING_DECK_SUCCESS,
    FETCHING_DECK_FAIL,
    DEALING_CARDS_START,
    DEALING_CARDS_SUCCESS,
    DEALING_CARDS_FAIL,
    FETCHING_PLAYER_CARD_START,
    FETCHING_PLAYER_CARD_SUCCESS,
    FETCHING_PLAYER_CARD_FAIL,
} from "./../actions";

const initialState = {
  deckID: "",
  cardsRemaining: null,
  isShuffling: false,
  isDealing: false,
  playerCards: null,
  dealerCards: null,
  isFetchingCard: false,
  error: "",
  playerTotal: null,
  dealerTotal: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DECK_START:
      return {
        ...state,
        isShuffling: true,
        error: "",
      };
    case FETCHING_DECK_SUCCESS:
      return {
        ...state,
        deckID: action.payload.deck_id,
        cardsRemaining: action.payload.remaining,
        playerCards: null,
        dealerCards: null,
        isShuffling: false,
      };
    case FETCHING_DECK_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case DEALING_CARDS_START:
      return {
        ...state,
        isDealing: true,
        error: "",
      };
    case DEALING_CARDS_SUCCESS:
      return {
        ...state,
        cardsRemaining: state.cardsRemaining-4,
        playerCards: [action.payload[0], action.payload[2]],
        dealerCards: [action.payload[1], action.payload[3]],
        isDealing: false,
      };
    case DEALING_CARDS_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    case FETCHING_PLAYER_CARD_START:
      return {
        ...state,
        isFetchingCard: true,
        error: "",
      };
    case FETCHING_PLAYER_CARD_SUCCESS:
      return {
        ...state,
        cardsRemaining: state.cardsRemaining-1,
        playerCards: [...state.playerCards, action.payload[0]],
        isFetchingCard: false,
      };
    case FETCHING_PLAYER_CARD_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
