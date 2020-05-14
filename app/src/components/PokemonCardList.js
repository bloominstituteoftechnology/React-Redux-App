import React, { useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions'

const PokemonCardList = props => {

    const { fetchPokemon, searchTerm, cards } = props;

    useEffect(() => {
        fetchPokemon(searchTerm);
    }, [fetchPokemon, searchTerm]);

    return ( 
        <div className="pokemon-card-container">
        {cards.map(card => (
            <PokemonCard key={card.id} image={card.imageUrl} name={card.name} />
        ))}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cards: state.cards,
        searchTerm: state.searchTerm
    }
}
 
export default connect(mapStateToProps, { fetchPokemon })(PokemonCardList);