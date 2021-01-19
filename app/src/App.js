import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getCharacters } from './actions/index'

const Wrapper = styled.div`
    background: url('https://images6.alphacoders.com/909/thumb-1920-909641.png');
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.h1``

const Fetching = styled.p``

const CharacterWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-evenly;

`

const Name = styled.h4`
    color: white;
    text-align: center;
`

const NameWrapper = styled.div`
    width: 10rem;
    background: black;
    margin: 1rem;
`

const Error = styled.p``

const Button = styled.button``

const App = (props) => {
    console.log(props)
    const fetchCharacters = (event) => {
        event.preventDefault()
        props.getCharacters()
    }
    return (
        <Wrapper>
            <Title>Rick and Morty Characters, yo!</Title>
            {props.isFetching && <Fetching>Fetching your Characters!</Fetching>}
            <CharacterWrapper>
                {props.characters.map((character) => {
                    return (
                        <NameWrapper>
                            <Name>{character.name}</Name>
                        </NameWrapper>
                    )
                })}
            </CharacterWrapper>
            {props.error && <Error>{props.error}</Error>}
            <Button onClick={fetchCharacters}>Get Characters</Button>
        </Wrapper>
    )
}

const mapStateToProps = state => ({
    characters: state.characters,
    error: state.error,
    isFetching: state.isFetching
})

export default connect(mapStateToProps, { getCharacters })(App)