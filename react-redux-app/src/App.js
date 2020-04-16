import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchData } from "./actions";
import { connect } from "react-redux";
import styled from "styled-components";

import Card from "./components/Card";
import PDHeader from "./components/PDHeader";
import PDScreen from "./components/PDScreen";
import PDLeftControls from "./components/PDLeftControls";
import PDOpening from "./components/PDOpening";
import PDRightControls from "./components/PDRightControls";

const Container = styled.div`
    background: #dc0a2d;
    width: 800px;
    height: 500px;
    display: flex;
`;

const LeftContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    border-right: 5px solid black;
    border-bottom: 5px solid black;
`;
const RightContainer = styled(LeftContainer)`
  
`;

function App(props) {
    return (
        <Container>
            <LeftContainer>
                <PDHeader />
                <PDScreen />
                <PDLeftControls />
            </LeftContainer>
            <RightContainer>
                <PDOpening />
                <PDRightControls />
            </RightContainer>
        </Container>
    );
}

const mapStateToProps = state => {
    return {
        data: state.data
    };
};

export default connect(mapStateToProps, {
    fetchData
})(App);

// const [ data, setData ] = useState([])
// useEffect(() => {
//   setData(props.data)
// }, [props.data])

// <GridContainer>
//   {data.length > 0 &&
//     data.map((item, i) => <Card key={i} {...item}/> )
//   }
//   <button onClick={() => props.fetchData()}>Get data</button>
// </GridContainer>
