import React from "react";
import styled from "styled-components";

const ViewTitle = styled.h2`
    color: navy;
    text-align: center;
    padding: 0;
    margin: 0;
`

const ViewText = styled.h3`
    color: black;
    text-align: center;
    font-size: 20px;
`
const SimpleDetailView = (props) => {
    console.log(props)
    return (
        <>
            <ViewTitle>{props.title.toUpperCase()}</ViewTitle>
            {props.types && props.types.map(({type}, i) => <ViewText key={i}>{type.name.toUpperCase()}</ViewText>)}
        </>
    )
}

export default SimpleDetailView;