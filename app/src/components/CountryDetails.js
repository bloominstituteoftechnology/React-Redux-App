import React from 'react';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';

const CountryDetails = () => {
    const countryData = useSelector(state => state.countryData);
    return (
        <Scrollbars>
            <pre>{JSON.stringify(countryData, null, 2)}</pre>
        </Scrollbars>
    )
}

export default CountryDetails
