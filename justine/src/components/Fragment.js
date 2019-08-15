import React from 'react'
import styled from 'styled-components' 

const Fragment = (props) => {
    console.log(props)

    const Tile = styled.div`
    background-image: url('${props => props.primaryimageurl}'), url('${props => props.primaryimageurl}');
	background-size: cover, 5% 5%;
    background-position: center;
    background-blend-mode: overlay;
    height:100vh;
    display:flex;
    justify-content:flex-end;
    align-items:flex-start;
    border-top: 15px solid #c2fe59;
    padding: 0
    `;

    const Caption = styled.div`
    text-align: right;
    max-width:50%;
    `

    const Title = styled.p`
    background-color: #c2fe59;
    padding-right: 5px;
    `;

    return(
        <div>
            <Tile primaryimageurl={props.primaryimageurl}>
                <Caption><Title>{props.title} <a href={props.url}>{props.objectnumber}</a></Title></Caption>
            </Tile>
        </div>
    )
}

export default Fragment