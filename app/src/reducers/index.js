

export const dataReducer =(state=[], action) => {
  switch (action.type) {
    case 'FETCHING_DATA_SUCCESS':
      return action.payload;
      default:
        return state;
  }
};