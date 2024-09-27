import * as types from "./actionTypes";

const initialCount = 0;

export function countReducer(state = initialCount, action) {
  switch (action.type) {
    case types.INCREMENT:
      return state + 1;

    case types.DECREMENT:
      return state - 1;

    case types.RESET:
      return 0;
    default:
      return state;
  }
};

const initialData = {};
export function nasaAPI(state = initialData, action) {
    switch(action.type) {
        case types.NASAPOD:
            return action.payload
        default:
            return state;
    }
};