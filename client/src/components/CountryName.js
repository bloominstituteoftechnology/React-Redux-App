import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions';

import '../App.css';

const CountryName = props => {
  return (
    <div>
      <h1>Countries of the world</h1>
      {props.isLoading ? (
        <div>Loading Data...</div>
      ) : (
        <div>
          <button onClick={() => props.getData()}>Get Countries</button>
          {props.error && (
            <div style={{ color: 'red' }}>*error loading data*</div>
          )}
          {props.countriesList.map(country => {
            return (
              <div className='list' key={country.Name}>
                <div className='item'>Country Name: {country.Name}</div>
                <div className='item'>ISO2 Code: {country.ISO}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    countriesList: state.countriesList,
    isLoading: state.isLoading,
    error: state.error
  };
};
export default connect(mapStateToProps, { getData })(CountryName);
