import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    margin-top: 30px;
`
const ScreenFrame = styled.div`
    width: 225px;
    height: 200px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
const ScreenFrameCorner = styled.div`
    width: 0px;
    height: 180px;
    border-bottom: 20px solid #DC0A2D;
    border-right: 20px solid lightgray;
`

const Screen = styled.div`
    background: black;
    height: 140px;
    width: 190px;
    margin-right: 15px;
`

const ScreenFrameBottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 190px;
    height: 10px;
    align-items: center;
    margin-right: 10px;
`
const ScreenFrameTop = styled.div`
    display: flex;
    justify-content: space-around;
    width: 50px;
`

const ScreenButton = styled.div`
    height: 12px;
    width: 12px;
    background: red;
    border-radius: 50px;
    border: 1px solid black;
`

const Hamburger = styled.img`
    height: 25px;
    width: 25px;
`

const ScreenSmallButton = styled(ScreenButton)`
    height: 5px;
    width: 5px;
`

const PDScreen = () => {
    return (
        <Container>
            <ScreenFrameCorner/>
            <ScreenFrame>
                <ScreenFrameTop>
                    <ScreenSmallButton/>
                    <ScreenSmallButton/>
                </ScreenFrameTop>
                <Screen />
                <ScreenFrameBottom>
                    <ScreenButton/>
                    <Hamburger src="https://i.ya-webdesign.com/images/navigation-bar-png-1.png" />
                </ScreenFrameBottom>
            </ScreenFrame>
        </Container>
    )
}

export default PDScreen;