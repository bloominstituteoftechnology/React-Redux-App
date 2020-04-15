import React, { useState, useEffect } from 'react';
import './App.css';
import { fetchData } from "./actions";
import { connect } from 'react-redux';
import styled from "styled-components";

import Card from "./components/Card";
import PDHeader from "./components/PDHeader";
import PDScreen from "./components/PDScreen";

const Container = styled.div`
  background: #DC0A2D;
  width: 800px;
  height: 500px;
`

const LeftContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  border-right: 5px solid black;
`

function App(props) {


  return (
    <Container>
      <LeftContainer>
        <PDHeader />
        <PDScreen />
      </LeftContainer>
    </Container>
  );
}

const mapStateToProps= state => {
  return {
    data: state.data
  }
}

export default connect(
  mapStateToProps,
  {
    fetchData
  }
)(App);

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