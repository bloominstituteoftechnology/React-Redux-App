import React from "react";
import { connect } from "react-redux";
import { getData } from "../actions/actions";

import "../App.css";

const Country = (props) => {
  return (
    <div>
      <h1>Countries of the world</h1>
      {props.isLoading ? (
        <div>Loading Data...</div>
      ) : (
        <div>
          <button onClick={() => props.getData()}>Get Countries</button>
          {props.error && (
            <div style={{ color: "red" }}>*error loading data*</div>
          )}
          {props.countriesList.map((country) => {
            return (
              <div className='contry-container'>
                <div className='country-card'>
                  <div className='list' key={country.Name}>
                    <div className='item1'>
                      <span>Country Name:</span> {country.Name}
                    </div>
                    <div className='item2'>
                      <span>ISO2 Code:</span> {country.ISO}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    countriesList: state.countriesList,
    isLoading: state.isLoading,
    error: state.error,
  };
};
export default connect(mapStateToProps, { getData })(Country);
