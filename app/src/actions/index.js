import pokemontcg from '../apis/pokemontcg';

export const fetchPokemon = pokemon => async dispatch => {
    
        const response = await pokemontcg.get(`?name=${pokemon}`);

        dispatch({ type: 'FETCH_POKEMON', payload: response });
};

export const searchPokemon = searchTerm => async dispatch => {

    dispatch({ type: 'SEARCH_POKEMON_START' })
    
    dispatch({ type: 'SEARCH_POKEMON', payload: searchTerm })  
}
