import React, { useState, useEffect } from "react";
import "./App.css";
import { fetchData } from "./actions";
import { connect } from "react-redux";
import styled from "styled-components";

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
const RightContainer = styled(LeftContainer)``;

function App(props) {

    useEffect(() => {
        props.fetchData();
    }, []);

    return (
        <Container>
            <LeftContainer>
                <PDHeader />
                <PDScreen data={props.data} />
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
