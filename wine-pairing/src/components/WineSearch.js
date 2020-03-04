import React, { useState, useEffect, Component } from 'react';
import {searchWines} from '../actions';


export const WineSearch = (props) => {
    const {find, isFetching} = props;
    const [newWineFind, setNewWineFind] = useState();
    console.log("NewWineFind: ", newWineFind);

console.log("Wine Search find: ", find)

    // useEffect(() => {
    //     find();
    // },[find])

    // if(isFetching){
    //     return <h2>Loading...</h2>
    // }

    const handleChanges = e =>{
        setNewWineFind(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
        find(newWineFind);
    }

    return(
      <>
        <div className="searchBar">
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="newWineFind" 
                className="searchField"
                value={newWineFind}
                onChange={handleChanges}
                />
                
                <button className="searchButton" onClick={handleSubmit} >
                    Find a Bottle
                </button>
            </form>
        </div>
      </>
    )
};
