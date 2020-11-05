/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getGameOfThronesData } from '../actions/index';

const getGameOfThronesList = (props) => {
    useEffect(() => {
        props.getGameOfThronesData();
    }, []);

    return (
        <div>
            <h2>Game of Thrones Characters</h2>
            {props.isLoading ? <p>Loading Game of Thrones Characters...</p> : null}
            {props.error ? <p style={{ color: 'red' }}>{props.error}</p> : null}
            {props.characters.map((character) => (
                <div>
                    <h4>{character.name}</h4>
                    <br />
                    <h4>{character.gender}</h4>
                    <br />
                    <h4>{character.culture}</h4>
                    <br />
                    <h4>{character.born}</h4>
                    <br />
                    <h4>{character.died}</h4>
                    <br />
                    <h4>{character.titles}</h4>
                    <br />
                    <h4>{character.aliases}</h4>
                    <br />
                    <h4>{character.father}</h4>
                    <br />
                    <h4>{character.mother}</h4>
                    <br />
                    <h4>{character.spouce}</h4>
                    <br />
                    <h4>{character.allegiances}</h4>
                    <br />
                    <h4>{character.povBooks}</h4>
                    <br />
                    <h4>{character.tvSeries}</h4>
                    <br />
                    <h4>{character.playedBy}</h4>
                </div>
            ))}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        characters: state.getGameOfThronesData,
        error: state.error
    };
};

export default connect(mapStateToProps, { getGameOfThronesData })(getGameOfThronesList);
