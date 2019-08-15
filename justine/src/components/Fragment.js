import React from 'react'
import styled, { css } from 'styled-components' 

const Fragment = (props) => {
    console.log(props)

    const Tile = styled.div`
    background-image: url('${props => props.primaryimageurl}'), url('${props => props.primaryimageurl}');
	background-size: cover, 5% 5%;
    background-position: center;
    background-blend-mode: overlay;
    height:100vh;
    `;

    const Title = styled.h1`
    
    `;

    return(
        <div>
            <Tile primaryimageurl={props.primaryimageurl}>
                <Title>{props.title}</Title>
            </Tile>
        </div>
    )
}

export default Fragment