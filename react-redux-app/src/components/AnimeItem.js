import React from "react";

const AnimeItem = ({ title, intro, image }) => {
  return (
    <div >
      <p className="article">{title}</p>
      <img src={image} alt="" />
      <p className="article">{intro} </p>
    </div>
  )
}

export default AnimeItem;