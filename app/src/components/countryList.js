import React from 'react';
import {connect} from 'react-redux';

const CountryList = props =>{
    return(
        <div>
            
            {props.countries.map(country => {
                return(
                    <div className='card' key={country.Country}>
                <h2>{country.Country}</h2>
                <p>Total confirmed cases: {country.TotalConfirmed}</p>
                <p>Total deaths attributed to Covid-19: {country.TotalDeaths}</p>
                </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        countries: state.countries
    };
}

export default connect(mapStateToProps,{})(CountryList);