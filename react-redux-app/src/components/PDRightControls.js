import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 395px;
    height: 417px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const Screen = styled.div`
    height: 90px;
    width: 300px;
    background: black;
    border-radius: 7px;
    box-shadow: 1px 1px black;
    margin-top: 20px;
    color: lime;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BlueButton = styled.div`
    background: dodgerblue;
    height: 35px;
    width: 53.5px;
    border: 2px solid;
`;

const BlueButtonContainer = styled.div`
    width: 285px;
    height: 72px;
    display: flex;
    flex-wrap: wrap;
    box-shadow: 6px 10px;
    border-radius: 8px;
    margin-top: 10px;
    span:first-child {
        display: flex;
        border-bottom: none;
        div:first-child {
            border-top-left-radius: 10px;
        }
        div:last-child {
            border-top-right-radius: 10px;
        }
    }
    span:last-child {
        display: flex;
        border-top: none;
        div:first-child {
            border-bottom-left-radius: 10px;
        }
        div:last-child {
            border-bottom-right-radius: 10px;
        }
    }
`;

const SmallButton = styled.div`
    width: 50px;
    height: 7px;
    background: black;
    border: 1px solid black;
    box-shadow: 1px 1px;
    border-radius: 4px;
`;

const SmallButtonContainer = styled.div`
    display: flex;
    width: 120px;
    justify-content: space-between;
    margin-left: 170px;
    margin-top: 20px;
`;

const BottomButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 200px;
    width: 370px;
    align-items: center;
    margin-top: 30px;
`;

const BottomButtonsSubContainer = styled.span`
    display: flex;
    width: ${props => props.width}px;
    justify-content: space-between;
`;
const WhiteButton = styled.div`
    background: lightgray;
    height: 40px;
    width: 50px;
    border-radius: 8px;
    border: 2px solid;
    box-shadow: 2px 2px;
`;

const Light = styled.div`
    background: yellow;
    width: 45px;
    height: 45px;
    border-radius: 50px;
    margin: 8px 15px 8px 10px;
    box-shadow: 3px 3px;
`;

const LightDot = styled.div`
    background: white;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    border: 8px solid yellow;
`;

const LightShadow = styled.div`
    background: #e6e600;
    height: 39px;
    width: 39px;
    border-radius: 50px;
    margin: 3px 0 0 3px;
`;

const BlackButton = styled.div`
    background: #333333;
    height: 40px;
    width: 120px;
    border-radius: 5px;
    box-shadow: 3px 3px;
    margin-top: 20px;
`;

const PDRightControls = () => {
    const [ hoveredOption, setHoveredOption ] = useState("");
    const onButtonHover = e => {
        setHoveredOption(e.target.id)
    }
    return (
        <Container>
            <Screen>
                {hoveredOption && <h2>{hoveredOption}</h2>}
            </Screen>
            <BlueButtonContainer onMouseOut={() => setHoveredOption("")}>
                <span>
                    <BlueButton id="Type" onMouseOver={e => onButtonHover(e)}/>
                    <BlueButton onMouseOver={() => setHoveredOption("Height")}/>
                    <BlueButton onMouseOver={() => setHoveredOption("Weight")}/>
                    <BlueButton />
                    <BlueButton />
                </span>
                <span>
                    <BlueButton />
                    <BlueButton />
                    <BlueButton />
                    <BlueButton />
                    <BlueButton />
                </span>
            </BlueButtonContainer>
            <SmallButtonContainer>
                <SmallButton />
                <SmallButton />
            </SmallButtonContainer>
            <BottomButtonsContainer>
                <BottomButtonsSubContainer width="300">
                    <BottomButtonsSubContainer width="100">
                        <WhiteButton
                            style={{
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 0
                            }}
                        />
                        <WhiteButton
                            style={{
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 0
                            }}
                        />
                    </BottomButtonsSubContainer>
                    <Light>
                        <LightShadow>
                            <LightDot />
                        </LightShadow>
                    </Light>
                </BottomButtonsSubContainer>
                <BottomButtonsSubContainer width="300">
                    <BlackButton />
                    <BlackButton />
                </BottomButtonsSubContainer>
            </BottomButtonsContainer>
        </Container>
    );
};

export default PDRightControls;
