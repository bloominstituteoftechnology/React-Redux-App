import React from "react";
import styled from 'styled-components';
const StyledDiv = styled.div`
 text-align: center;
 border: 1px solid black;
 margin: 5%;

`
const Characters = (props) => {
  return (
    <StyledDiv>
      <h2>{props.item.name}</h2>
      <h3>Status: {props.item.status}</h3>
      <h4>Species: {props.item.species}</h4>
      <p>gender: {props.item.gender}</p>
      <img src={props.item.image} alt={props.item.name} />
    </StyledDiv>
  );
};
export default Characters;
