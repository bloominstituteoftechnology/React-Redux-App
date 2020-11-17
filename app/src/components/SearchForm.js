import React, { useState } from 'react';
import { connect } from 'react-redux';

import { loadDataForLiquor } from '../actions';

const SearchForm = props => {
    const [searchLiquor, setSearchLiquor] = useState('Vodka');
    
    const handleChange = e => {
        setSearchLiquor(e.target.value);
    }
    
    const handleClick = e => {
        e.preventDefault();
        props.loadDataForLiquor(searchLiquor);
    }

    return (
        <div>
            <input value={searchLiquor} onChange={handleChange} />
            <button onClick={handleClick}>Search</button>
        </div>
    )
}

export default connect((null), { loadDataForLiquor })(SearchForm)