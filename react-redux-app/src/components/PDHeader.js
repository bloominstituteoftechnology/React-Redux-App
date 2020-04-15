import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 400px;
`

const Header = styled.div`
    background: #DC0A2D;
    height: 75px;
    width: 225px;
    border-bottom: 8px solid black;
    z-index: 2;
    display: flex;
`

const HeaderAngle = styled.div`
    position: absolute;
    background: #DC0A2D;
    height: 60px;
    width: 100px;
    left: 190px;
    top: -9px;
    transform: rotate(-40deg);
    border-bottom: 8px solid black;
    z-index: 2;
`

const SmallHeader = styled.div`
    position: relative;
    left: 25px;
    background: #DC0A2D;
    height: 50px;
    width: 150px;
    border-bottom: 8px solid black;
    z-index: 2;
`
const HeaderLight = styled.div`
    background: dodgerblue;
    width: 45px;
    height: 45px;
    border-radius: 50px;
    border: 5px solid lightgray;
    margin: 8px 15px 8px 10px;
`

const HeaderSmallLight = styled.div`
    background: ${props => `${props.color}` };
    width: 15px;
    height: 15px;
    border-radius: 50px;
    border: 1px solid black;
    margin: 8px 7px;
`


const PDHeader = () => {
    return (
        <Container>
            <Header>
                <HeaderLight/>
                <HeaderSmallLight color="red" />
                <HeaderSmallLight color="yellow" />
                <HeaderSmallLight color="green" />
            </Header>
            <HeaderAngle />
            <SmallHeader />
        </Container>    
    )
}

export default PDHeader;