export const addFeature = props => {
    return {
        type: 'ADD_WATCH',
        payload: {
            id: Date.now,
            title: props.anime.title,
            director: props.anime.director,
              }
      }
    }