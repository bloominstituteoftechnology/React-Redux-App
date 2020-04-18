import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../states/actionCreators";
import styled from "styled-components";

const bigPadding = "4px";

const StyledTitle = styled.div`
  padding: ${bigPadding};
  &:hover {
    border: 2px solid green;
  }
  margin: 2px;
  border: 2px solid grey;
  border-radius: 4px;
  h1 {
    color: whitesmoke;
  }
  span {
    color: rgb(134, 121, 121);
    &:hover {
      color: whitesmoke;
      font-weight: bold;
    }
  }
`;

const StyledDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${bigPadding};
  &:hover {
    border: 4px solid green;
  }
  margin-top: 2rem;
  border: 2px solid grey;
  border-radius: 4px;
  h1 {
    color: whitesmoke;
  }
  h2 {
    font-size: 2.25rem;
  }
  p {
    font-size: 1.25rem;
    color: rgb(252, 252, 252);
  }
`;

const StyledDate = styled.div`
  padding: ${bigPadding};
  &:hover {
    border: 2px solid green;
  }
  margin: 2px;
  border: 2px solid grey;
  border-radius: 4px;
  h1 {
    color: whitesmoke;
  }
  span {
    color: rgb(134, 121, 121);
    &:hover {
      color: whitesmoke;
      font-weight: bold;
    }
  }
`;
const MiniContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const AppStyled = styled.div`
  text-align: center;
  background: rgb(69, 85, 69);
  width: 70vw;
  margin: 0 auto;
  padding: 1rem;
  h2 {
    color: rgb(189, 183, 182);
  }
  img {
    max-width: 80%;
    /* max-height: 40%; */
  }
`;

export function NasaPod({ getNasaAPI, title, date, url, explanation }) {
  // debugger
  console.log(title);
  useEffect(() => {
    getNasaAPI();
  }, []);
  return (
    <AppStyled>
      <h1>Today's Photo and Its Story</h1>
      <figure>
        <img src={url} alt="image" />
      </figure>
      <MiniContainer>
        <StyledTitle>
          <h2>{title} </h2>
        </StyledTitle>
        <StyledDate>
          <h2>
            Today: <span>{date}</span>
          </h2>
        </StyledDate>
      </MiniContainer>
      <StyledDescription>
        <h2>Description:</h2>
        <p>{explanation}</p>
      </StyledDescription>
    </AppStyled>
  );
}

export default connect(
  state => state.api,
  actionCreators
)(NasaPod);
