import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
    display: flex;
    padding-top: 30px;
    border-left: 5px solid;
    width: 400px;
    justify-content: center;
`
const ScreenFrame = styled.div`
    width: 275px;
    height: 200px;
    background-color: lightgray;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border: 1px solid;
    border-left: none;
    border-top: none;
    box-shadow: 5px 5px;
    
`
const ScreenFrameCorner = styled.div`
    width: 0px;
    height: 180px;
    border-bottom: 20px solid #DC0A2D;
    border-right: 20px solid lightgray;
`

const Screen = styled.div`
    background: ${props => props.selectedData ? "darkturquoise" : "black"};
    height: 140px;
    width: 230px;
    margin-right: 15px;
    border-radius: 7px;
    
    h2 {
        color: navy;
        text-align: center;
        padding: 0;
        margin: 0;
    }
`

const ScreenImage = styled.img`
    height: 125px;
    width: 125px;
    background-size: cover;
    display: flex;
    margin: 0 auto;
`

const ScreenFrameBottom = styled.div`
    display: flex;
    justify-content: space-between;
    width: 230px;
    height: 10px;
    align-items: center;
    margin-right: 10px;
`
const ScreenFrameTop = styled.div`
    display: flex;
    justify-content: space-around;
    width: 75px;
`

const ScreenButton = styled.div`
    height: 12px;
    width: 12px;
    background: red;
    border-radius: 50px;
    border: 1px solid black;
    box-shadow: 1.5px 1.5px;
`

const Hamburger = styled.img`
    height: 45px;
    width: 35px;
`

const ScreenSmallButton = styled(ScreenButton)`
    height: 7px;
    width: 7px;
    box-shadow: 1px 1px;
`

const PDScreen = ({ selectedData }) => {
    const itemNo = () => {
        const splitUrl = selectedData.url.split("/");
        return splitUrl[splitUrl.length - 2]
    }
    return (
        <Container>
            <ScreenFrameCorner/>
            <ScreenFrame>
                <ScreenFrameTop>
                    <ScreenSmallButton/>
                    <ScreenSmallButton/>
                </ScreenFrameTop>
                <Screen selectedData={selectedData}>
                    {selectedData && <h2>{selectedData.name.toUpperCase()}</h2>}
                    {selectedData && <ScreenImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${itemNo()}.png`}/>}
                </Screen>
                <ScreenFrameBottom>
                    <ScreenButton/>
                    <Hamburger src="https://i.ya-webdesign.com/images/navigation-bar-png-1.png" />
                </ScreenFrameBottom>
            </ScreenFrame>
        </Container>
    )
}

const mapStateToProps = state => {
    return {
        selectedData: state.selectedData
    }
}

export default connect(mapStateToProps, undefined)(PDScreen);
