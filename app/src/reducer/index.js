const initialState = {
    id: null,
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    origin: {
            name: "",
            url: ""
        },
    location: {
            name: "",
            url: ""
        },
    image: "",
    episode: [
            ""
        ],
    url: "",
    created: ""
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };