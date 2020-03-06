import React from 'react';

const AnimeBoard = props => {
  console.log("props",props)
    return (
      <>
        <h1>{props.item.title}</h1>
        <div>
            <p>{props.item.director}</p>
        </div>
        <button>Watch Later</button>
      </>
    );
  };
  
  export default AnimeBoard;