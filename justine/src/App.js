import React from 'react';
import { connect } from 'react-redux'
import { getData } from './actions/actions'
import Fragments from './components/Fragments.js'
import styled from 'styled-components' 

const App = (props) => {

  const Intro = styled.div`
  height:80vh;
  width:100vh;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  background-color: #c2fe59;
  border-radius:50%;
  margin: 30px auto;
  `;

  const Button = styled.button`
  background-color: white;
  border: 3px solid #000;
  padding: 20px 40px;
  margin-top: 30px;
  `

  return (
    <div className="App">
      <Intro>
        <h1>TEN FRAGMENTS</h1> <p>from the collections of the <a href="https://www.harvardartmuseums.org">Harvard Art Museums</a></p>
      <Button onClick={props.getData}>
        {props.isLoading ? (
          'Loading'
        ) : (
          'Generate'
        )}
      </Button>
      </Intro>
      <Fragments objects={props.objects} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    objects: state.objects
  };
};
export default connect(
  mapStateToProps,
  { getData }
)(App)
