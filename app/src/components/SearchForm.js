import React, { useState } from "react"
import { connect } from 'react-redux';
import { loadDataForLocation } from '../actions/index'
const SearchForm = props =>{
 
    const [searchLocation, setSearchLocation] = useState('remote')

    const handleChange = e =>{
        setSearchLocation(e.target.value)
    }

    const handleClick = e =>{
        console.log("click click",e)
        e.preventDefault();
        //loadDataFromApi - load data 
        props.loadDataForLocation(searchLocation)
    }
    return <div> 

        <input 
        value={searchLocation}
        onChange={handleChange}
        placeholder="type something..."
        name="search"
        />
        <button onClick={handleClick}>search</button>
        
    </div>
}

export default connect(() => { return {}}, { loadDataForLocation })(SearchForm);
//SearchForm isn't interested in the state data .. it is only interested in manipulating what state to transition to