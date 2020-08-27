import React from 'react';
import { connect } from "react-redux";
import {getPoke} from '../actions/getPokemon';
import axios from 'axios';

export const PokemonCard=(props)=>{
    const fetched=e=>{
        e.preventDefault()
        props.getPoke();
    }
    console.log(props.pokemon)
    return (
        <div>
        {/* <p>data</p> */}
    {/* <button onClick={fetched}>poke</button> */}
    {props.pokemon.map((pokemon)=>{<p key={pokemon.url}>{pokemon.name}</p>})}
    </div>
    //     <div>
    //         <img src={pokeImg} alt={pokeName}/>
    //         <p><span>#{pokeNum} <h1>{pokeName}</h1></span></p>
    //         <p><span>type1:{pokeType1} type2:{pokeType1}</span></p>
    //         <p>height:{pokeHeight}</p>
    //         <p>weight:{pokeWeight}</p>
    //     </div>
    )
}

function call(){
    
        axios
          .get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
          .then((res)=>{console.log(res.data)
            // .then(console.log(res.data.map(()=>{})));
        }
          )
          .catch((err)=>{console.log(err);})
      
}
call();

const mapStateToProps = (state) => {
    return { 
        pokemon:state.pokemon,
        isFetching:state.isFetching,
        // toggled:state.toggled,
        error:state.error
     };
  };
  
  const mapDispatchToProps = { getPoke };
  
  export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);