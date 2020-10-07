import React from "react";
import { connect } from "react-redux";
import { getInsult } from "./actions/index";
import styled from 'styled-components';

const Wrapper = styled.div`
/* styles */
  margin: 40px;
  border: 10px white;
  background: papayawhip;
  color: #4f4f4f;
  `;

const Header = styled.h1`
  font-size: 4rem;
  text-align: center;
  color: white;
  `;

export default function App(props) {
  const { getInsult } = props;
  
  return (
    <Wrapper>
      {error ? props.error : null}
      <Header>The Insults Continue</Header>
      <InsultList/>
      {props.insults.map((insult) => (
        <Header key={insult.number}>{insult.insult}</Header>
      ))}
    </Wrapper>
  );
}

const mapStateToProps = (state) => {
  return {
    insults: state.insults
  };
};

export default connect(null, { getInsult })(App);
