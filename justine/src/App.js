import React from 'react';
import { connect } from 'react-redux'
import { getData } from './actions/actions'

const App = (props) => {
  return (
    <div className="App">
      <button onClick={props.getData}>
        {props.isLoading ? (
          "Loading"
        ) : (
          'Get Objects'
        )}
      </button>
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
