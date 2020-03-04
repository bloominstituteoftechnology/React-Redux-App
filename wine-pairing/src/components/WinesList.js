

import React, { useEffect } from 'react';
// import './WineList.css';
import { connect } from 'react-redux';
import { Grid, Image } from 'semantic-ui-react';


import { WineCard } from './WineCard'
import { searchWines } from '../actions'

const WineList = (props) => {
    const wineItems = props.wine.map((item) => {
        return <WineCard key={item.id} data={item} />
    });
    console.log("WineList props: ", props);
    return (
        <div>
            <h1> WineList </h1>
            <ul>
                {wineItems}
            </ul>



        </div>

    )
}

export default WineList