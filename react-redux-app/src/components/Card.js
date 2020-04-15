import React from "react";
import styled from "styled-components";

const Card = (props) => {
    const splitUrl = props.url.split("/")
    const itemNo = splitUrl[splitUrl.length - 2]
    console.log(splitUrl)
    return (
        <div>
            <h3>{props.name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${itemNo}.png`}/>
        </div>
    )
}

export default Card;