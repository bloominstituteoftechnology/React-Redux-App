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
`
const SimpleDetailView = (props) => {
    console.log(props.title)
    return (
        <>
            <ViewTitle>{props.title.toUpperCase()}</ViewTitle>
            
        </>
    )
}

export default SimpleDetailView;