import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../store/actions/pokemonActions';
import Loader from 'react-loader-spinner';


const Pokemon = props => {
    useEffect(() => {
        props.fetchPokemon(1);
    }, []);
    return (
        <div>
            <h1>POKEMON</h1>
            {props.isFetching && (
                <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
            {props.name && <h3>{props.name}</h3>}
            {props.error && <p className="error">{props.error}</p>}
            <button onClick={()=>props.fetchPokemon(props.num-1)}>PREVIOUS POKEMON</button>
            <button onClick={()=>props.fetchPokemon(props.num+1)}>NEXT POKEMON</button>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        name: state.pokemon.name,
        isFetching: state.pokemon.isFetching,
        error: state.pokemon.error,
        num: state.pokemon.num
    };
};
export default connect(
    mapStateToProps, { fetchPokemon }
)(Pokemon)