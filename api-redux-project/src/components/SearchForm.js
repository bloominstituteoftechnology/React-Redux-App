import React, {useState} from 'react'
import {loadAoeData} from '../actions/index';
import {connect} from 'react-redux'

const SearchForm = (props) => {
    console.log(props)
    const handleClick = (e)=>{
        e.preventDefault();
        props.loadAoeData()
    }
    return (
        <div>
                <button onClick={handleClick}>Load Jokes</button>
        </div>
    )
}

export default connect(()=>{return {}},{loadAoeData})(SearchForm);
