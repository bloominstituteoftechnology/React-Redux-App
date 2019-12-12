import React from 'react';
import {connect} from 'react-redux';

import { getCharacter } from '../actions';

const DisplayCharacter = props => {
    return(
        <div>
            <h1>Final Fantasy Characters</h1>
            <button onClick={props.getCharacter}>Get Character</button>
            {!props.character && !props.isFetching && <p>Click the button to grab a character!</p>}
            {props.isFetching && (<p>Loading...</p>)}
            {props.character && 
            <div>
                <h3 className='characterName'>{props.character.name}</h3>
                <img className='characterImg' src={props.character.picture} alt={`picture of ${props.character.name}`} />
                <p className='characterDesc'>{props.character.description}</p>
                <div className='characterAttrs'>
                    <p>Age: {props.character.age}</p>
                    <p>Gender: {props.character.gender}</p>
                    <p>Height: {props.character.height}</p>
                    <p>Weight: {props.character.weight}</p>
                    <p>Race: {props.character.race}</p>
                    <p>Job: {props.character.job}</p>
                </div>
            </div>
            }
        </div>
    );
};

const mapStateToProps = state => {
    console.log(state)
    return {
        character: state.character,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getCharacter })(DisplayCharacter);