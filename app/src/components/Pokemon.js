import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {getPokemon} from '../actions/pokemonActions';

const Pokemon=((props)=>{
// const [pokemonData,setPokemonData]=useState([]);

useEffect(()=>{props.getPokemon();},[props.getPokemon]);

const handleClick=(e)=>{
    e.preventDefault();
    props.getPokemon();
}

// console.log(props.details)
return(
    <div>
        <h1 className='pokemonTitle'>Random Pokemon Generator</h1>
        <button onClick={handleClick}>Get a Pokemon</button>
        {/* {props.pokemon.map(poke=>
        <p>
            <h4>{poke.name}</h4>
        </p>)}    */}
            {props.details.map(detail=>       
            <div key={detail.id}>
                <h2 className='pokeName'>You got {detail.name.toUpperCase()}!</h2>
                <img src={detail.sprites.front_default} className='pokePic' alt='pokemon' />
                <div ><h3>Type/s:</h3> {detail.types.map(type=>
                    <h3 key={type.slot} className={`${type.type.name}`}>{type.type.name.toUpperCase()}</h3>)}
                </div>
                <p>Height: {((detail.height/100)*10).toFixed(2)+'m'}</p>
                <p>Weight: {((detail.weight/100)*10).toFixed(2)+'kg'}</p>
                <div>Stats: {detail.stats.map(stat=>
                    <p key={stat.stat.url}>{stat.stat.name.toUpperCase()}- {stat.base_stat}</p>
                )}</div>        
            </div>) 
}
    </div>
)
})

const mapStateToProps=state=>{
   return{
    pokemon:state.pokemon,
    isFetching:state.isFetching,
    error1:state.error1,
    details:state.details,
    error2:state.error2
   }
}

export default connect(mapStateToProps,{getPokemon})(Pokemon)