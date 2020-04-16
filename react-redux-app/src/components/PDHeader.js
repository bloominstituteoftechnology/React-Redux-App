import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
    width: 400px;
`;

const Header = styled.div`
    background: #dc0a2d;
    height: 75px;
    width: 225px;
    border-bottom: 8px solid black;
    z-index: 2;
    display: flex;
`;

const HeaderAngle = styled.div`
    position: absolute;
    background: #dc0a2d;
    height: 60px;
    width: 100px;
    left: 190px;
    top: -9px;
    transform: rotate(-40deg);
    border-bottom: 8px solid black;
    z-index: 2;
`;

const SmallHeader = styled.div`
    position: relative;
    left: 25px;
    background: #dc0a2d;
    height: 50px;
    width: 150px;
    border-bottom: 8px solid black;
    z-index: 2;
`;
const HeaderLight = styled.div`
    background: dodgerblue;
    width: 45px;
    height: 45px;
    border-radius: 50px;
    border: 5px solid lightgray;
    margin: 8px 15px 8px 10px;
    box-shadow: 3px 3px;
`;

const HeaderLightDot = styled.div`
    background: #65b3ff;
    width: 10px;
    height: 10px;
    border-radius: 50px;
    border: 8px solid dodgerblue;
`;

const HeaderLightShadow = styled.div`
    background: #0074e4;
    height: 39px;
    width: 39px;
    border-radius: 50px;
    margin: 3px 0 0 3px;
`;

const HeaderSmallLight = styled.div`
    background: ${props => props.color};
    width: 15px;
    height: 15px;
    border-radius: 50px;
    margin: 8px 7px;
    border: 1px solid;
    box-shadow: 2px 2px;
`;
const HeaderSmallLightDot = styled.div`
    background: white;
    border-radius: 50px;
    height: 3px;
    width: 3px;
    margin-right: 2px;
    margin-top: -0.5px;
    border: ${props => props.color} solid 5px;
    z-index: 3;
`;

const PDHeader = () => {
    return (
        <Container>
            <Header>
                <HeaderLight>
                    <HeaderLightShadow>
                        <HeaderLightDot />
                    </HeaderLightShadow>
                </HeaderLight>
                <HeaderSmallLight color="red">
                    <HeaderSmallLightDot color="#e62e00" />
                </HeaderSmallLight>
                <HeaderSmallLight color="yellow">
                    <HeaderSmallLightDot color="#e6e600" />
                </HeaderSmallLight>
                <HeaderSmallLight color="green">
                    <HeaderSmallLightDot color="#00b300" />
                </HeaderSmallLight>
            </Header>
            <HeaderAngle />
            <SmallHeader />
        </Container>
    );
};

export default PDHeader;
