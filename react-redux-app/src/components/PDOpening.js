import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 395px;
`;

const Header = styled.div`
  background: white;
  height: 50px;
  width: 150px;
  border-bottom: 8px solid black;
  z-index: 2;
  display: flex;
`;

const HeaderAngle = styled.div`
  position: absolute;
  background: #dc0a2d;
  height: 60px;
  width: 100px;
  left: 512px;
  top: -10px;
  transform: rotate(40deg);
  border-bottom: 8px solid black;
  z-index: 1;
  background: white;
`;

const SmallHeader = styled.div`
  position: relative;
  left: 25px;
  background: white;
  height: 75px;
  width: 225px;
  border-bottom: 8px solid black;
  z-index: 2;
`;

const PDOpening = () => {
  return (
    <Container>
      <Header>
      </Header>
      <HeaderAngle />
      <SmallHeader />
    </Container>
  );
};

export default PDOpening;
