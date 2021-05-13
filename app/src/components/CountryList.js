import React from 'react';
import { connect } from "react-redux"
import '../app.css';
import CountryCard from './CountryCard';

function CountryList(props) {

  return (
    <div className="CountryList">
      {props.country.map((item)=> (
          <CountryCard key={item.id} item={item} />
      ))}
    </div>
  );
}

const mapStateToProps = state => {
    return {
        country: state.country
    };
};

export default connect(mapStateToProps, {})(CountryList);