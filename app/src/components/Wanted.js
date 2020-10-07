import React from 'react';
import { connect } from 'react-redux';

const Wanted = (props) => {
    return(
        <div>
          <img src = {props.most_wanted.img} alt = "the Galactic federations most wanted." />
          <h3>{props.most_wanted.name}</h3>
        </div>
    )
}


export default Wanted; 