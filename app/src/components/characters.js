import React from 'react';
import { getCharacters } from '../actions/index';
import { CharacterArray } from '../data'
import '../App.css';
import { connect } from 'react-redux';

const Characters = props => {
    console.log(props)
    return(
        <div className="characters">
            <button onClick={CharacterArray}>Get Character List</button>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
};

export default connect(mapStateToProps, { getCharacters })(Characters);