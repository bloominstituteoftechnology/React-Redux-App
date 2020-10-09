import React, { useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions'

const PokemonCardList = props => {

    const { fetchPokemon, searchTerm, cards, isFetching } = props;

    useEffect(() => {
        fetchPokemon(searchTerm);
    }, [fetchPokemon, searchTerm]);

    return ( 
        <div className="pokemon-card-container">
        {isFetching && <img className="loader" src='https://cdn.pixabay.com/photo/2016/07/23/13/18/pokemon-1536849_960_720.png' alt='pokeball loader' />}
        {cards.map(card => (
            <PokemonCard key={card.id} image={card.imageUrl} name={card.name} />
        ))}
        </div>
    );
}


const mapStateToProps = state => {
    return {
        cards: state.cards,
        searchTerm: state.searchTerm,
        isFetching: state.isFetching
    }
}
 
export default connect(mapStateToProps, { fetchPokemon })(PokemonCardList);