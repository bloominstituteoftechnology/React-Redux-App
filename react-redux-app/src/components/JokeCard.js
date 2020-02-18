import React from "react";
import { connect } from "react-redux";
import { getJoke } from "../actions";
import styled from "styled-components";

const Chuck = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: auto;
`;
const JokeDiv = styled.div`
    width: 400px;
`
const Joke = styled.p`
  font-size: 20px;
  color: white;
  width: auto;
  align-text: ;
`;
const Header = styled.h1`
  color: white;
`;
const Button = styled.button`
  color: white;
  background-color: #4666ff;
  margin-top: 20px;
  border: 1px solid black;
  width: 150px;
  height: 40px;
  font-size: 15px;
`;
const JokeCard = state => {
  console.log("JOKE", state.joke);

  return (
     <Chuck>
      <Header>Chuck Norris</Header>
      {/* <h2>Joke of the day!</h2> */}
      
        <img src="chuck.jpg" alt="" />
      
      <JokeDiv>
      <Joke>{state.joke}</Joke>
    </JokeDiv>
      <Button onClick={state.getJoke}>Get Next Joke</Button>
    </Chuck>
    
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    joke: state.joke,
    error: state.error
  };
};
export default connect(mapStateToProps, { getJoke })(JokeCard);
