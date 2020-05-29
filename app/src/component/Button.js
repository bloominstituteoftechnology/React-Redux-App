import React from 'react';
import {connect} from 'react-redux';
import {animeApi} from '../actions';

const Button = ({animeApi}) => {

    return (
        <div>
            <button onClick={() => animeApi()}>See Anime</button>
        </div>
    )
}

export default connect(
    null,
    {animeApi}
)(Button);