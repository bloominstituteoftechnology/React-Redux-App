

import React from 'react';
// import './WineList.css';


import {WineCard} from './WineCard'

const WineList = (props) => {
    console.log("WineList props: ", props);
    return (
        <div>
            <h1> WineList </h1>
          {props.wine && props.wine.map (item => (<WineCard key = {item.id} data = {item}/>))}
            
            
          
        </div>
        
    )
}

export default WineList;