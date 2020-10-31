import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchInfo } from '../actions/fetchInfo';
import hq from '../images/hq.jpg';

const Core = props => {
  useEffect(() => {
    props.fetchInfo();
  }, [])

  return (
    <div className='core'>
      <img className='hq' src={hq} />
      <div className='core-info'>
        <h1>{props.data.name}</h1>
        <h2>{props.data.ceo}</h2>
        <h3>CEO</h3>
        <h2>{props.data.employees}+</h2>
        <h3>Employees</h3>
        <p>{props.data.summary}</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isFetching: state.info.isFetching,
    data: state.info.data,
    errors: state.info.errors
  }
}

export default connect(mapStateToProps, {fetchInfo})(Core);