import React from 'react';
import { connect } from "react-redux";
import {getPoke} from '../actions/getPokemon';
import PokemonDets from './pokemonDets'
// import axios from 'axios';

const PokemonCard=(props)=>{
    const fetched=e=>{
        console.log(123)
        props.getPoke();
    }
    console.log(props)
    return (
        <div>
        {/* <p>data</p> */}
    <div>
    {props.pokemon.map((poke)=>< PokemonDets data={poke} key={poke.url}/>)}
    </div>
    <button onClick={fetched}>poke</button>
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

// function call(){
    
//         axios
//           .get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
//           .then((res)=>{console.log(res.data)
//             .then(()=>{return })
//             // .then(console.log(res.data.map((poke)=>{<img src={poke.}/>})));
//         }
//           )
//           .catch((err)=>{console.log(err);})
      
// }
// call();

const mapStateToProps = (state) => {
    console.log(state)
    console.log(123)
    return { 
        pokemon:state.pokemon,
        isFetching:state.isFetching,
        // toggled:state.toggled,
        error:state.error
     };
  };
  
  const mapDispatchToProps = { getPoke };
  
  export default connect(mapStateToProps, mapDispatchToProps)(PokemonCard);