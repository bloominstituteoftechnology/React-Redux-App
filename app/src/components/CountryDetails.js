import React from 'react';
import { useSelector } from 'react-redux';

const CountryDetails = () => {
    const country = useSelector(state => state.country);
    return (
        <div>
            <pre>{JSON.stringify(country, null, 2)}</pre>
        </div>
    )
}

export default CountryDetails
