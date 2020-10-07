export const removeFeature = props => {
    return {
      type: 'REMOVE_WATCH',
      payload: props.anime.title,
    }
  }