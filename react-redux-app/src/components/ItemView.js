import React from "react";
import styled from "styled-components";

const ViewTitle = styled.h2`
    color: navy;
    text-align: center;
    padding: 0;
    margin: 0;
`

const ViewImage = styled.img`
    height: 125px;
    width: 125px;
    background-size: cover;
    display: flex;
    margin: 0 auto;
`
const ItemView = ({ name, image }) => {
    return (
        <>
            <ViewTitle>{name.toUpperCase()}</ViewTitle>
            <ViewImage src={image}/>
        </>
    )
}

export default ItemView;