import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 400px;
    height: 187px;
    display: flex;
    justify-content: space-evenly;
    border-left: 5px solid;
`

const LeftButton = styled.div`
    width: 50px;
    height: 50px;
    background:  #333333;
    border-radius: 50px;
    border: 1px solid black;
    margin-top: 30px;
    border: 1px solid;
    box-shadow: 5px 5px;
`

const SmallButton = styled.div`
    width: 50px;
    height: 7px;
    background: ${props => props.color};
    border: 1px solid black;
    box-shadow: 1px 1px;
    border-radius: 4px;
`

const MidScreen = styled.div`
    width: 110px;
    height: 60px;
    background: #51AE5F;
    border: 1px solid;
    border-bottom: none;
    border-right: none;
    box-shadow: 0px 0px 2px 2px;
`

const MidSectionContainer = styled.div`
    display:flex;
    flex-direction: column;
    height: 180px;
    justify-content: space-evenly;
    span {
        display: flex;
        width: 120px;
        justify-content: space-between;
    }
`
const DPad = styled.div`
    height: 30px;
    width: 30px;
    background: #333333;
    margin: 0 auto;
`
const Dot = styled.div`
    height: 10px;
    width: 10px;
    background: black;
    border-radius: 50px;
    margin: 10px auto;
`
const DPadContainer = styled.div`
    margin-top: 30px;
    dispaly: flex;
    flex-direction: column;
    width: 90px;
    height: 90px;
    span {
        display: flex;
    }
    
`

const PDLeftControls = () => {
    return (
        <Container>
            <LeftButton/>
            <MidSectionContainer>
                <span>
                    <SmallButton color="red"/>
                    <SmallButton color="#333333"/>
                </span>
                <MidScreen />
            </MidSectionContainer>
            <DPadContainer>
                <DPad style={{ border: "1px solid", borderBottom: "none", borderRight: "5px solid"}}/>
                <span>
                    <DPad style={{ border: "1px solid", borderRight: "none"}} />
                    <DPad style={{ border: "2px solid #333333"}} >
                        <Dot />
                    </DPad>
                    <DPad style={{  border: "2px solid", borderRight: "5px solid",  borderLeft: "none" }}/>
                </span>
                <DPad style={{  border: "1px solid", borderRight: "5px solid", borderTop: "1px solid #333333", borderBottom: "4px solid" }}/>
            </DPadContainer>
        </Container>
    )
}

export default PDLeftControls;