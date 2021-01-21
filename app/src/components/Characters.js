import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getCharacters } from '../actions';
import styled from 'styled-components';

const CharactersWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 2px solid black;
 `;   

const CharacterWrap = styled.div`
    margin: 2% 5%;
    background-color:black;
    color: yellow;
    padding: 1vw;

`;


const Characters = ({ characters, isFetching, error, getCharacters }) =>{
    console.log(characters)
    useEffect(() =>{
        getCharacters();
    }, []);

    if(error){
        return<h2>We got an error: {error}</h2>
    }

    if (isFetching) {
        return <h2>Fetching Star War Characters</h2>;
      }

    const handleClick = () =>{
        getCharacters();
    }

    return(
        <div>
            <button onClick={handleClick}>Get Characters</button>
            <CharactersWrapper>
                {characters.map((character) =>{
                    return(
                        <CharacterWrap>
                        <h3>{character.name}</h3>
                        <p>Height: {character.height} cm</p>
                        <p>Hair Color: {character.hair_color} </p>
                        <p>Eye Color: {character.height} cm</p>
                        <p>skin Color: {character.height} cm</p>
                        <p>Birth Year: {character.height} cm</p>
                        <p>Gender: {character.height} cm</p>
                        </CharacterWrap>
                    )
                })}
            </CharactersWrapper>
            
        </div>
    )
};

const mapStateToProps = state =>{
    return{
        characters: state.characters,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getCharacters })(Characters);