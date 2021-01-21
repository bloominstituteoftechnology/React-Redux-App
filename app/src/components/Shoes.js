import React, { useEffect, useState } from "react";
import { connect } from "react-redux"
import { getShoes } from "../actions";

const Shoes = ({ shoes, isFetching, error, getShoes }) => {
  
  
  // useEffect(() => {
  //   getShoes();
  // }, []);
  
  const handleClick = () => {
    getShoes();
  };

  if (error) {
    return <h2> We got an error: {error} </h2>
  }
  if (isFetching) {
    return <h2> Look at these shoes! </h2>
  }
console.log(shoes)
  return (
    <>
      <h2> Which Shoe will you wear today? </h2>
      
      {
        shoes ?
          shoes.map(shoe => {
            if (shoe.media.smallImageUrl !== "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0" || shoe.media.smallImageUrl !== "https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0" || shoe.media.smallImageUrl !== "null" || shoe.gender !== "toddler"){
            return <div className="shoeData">
              <img className="img" alt={shoe.title} src={shoe.media.smallImageUrl} />
              <h3>{shoe.title}</h3>
              <p>Release Date: {shoe.releaseDate}</p>
              <p>Retail:<span> ${shoe.retailPrice}.00</span></p>
              </div>
          }
        })
      : ''
      }
      
<button onClick={handleClick}>Get New Shoes!</button>

      </>
  )
}

const mapStateToProps = state => {
  return{
    shoes: state.shoes,
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps, { getShoes })(Shoes);