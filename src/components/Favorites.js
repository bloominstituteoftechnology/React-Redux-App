import React from 'react';

const Favorites = props => {
  // console.log('Props Favorites: ', props)
  return (
    <li>
      {props.quote}
    </li>
  )
}

export default Favorites;