import React, {useState, useEffect} from "react"
import axios from "axios"

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState("")
    
    useEffect(() => {
        axios
            .get(props.url)
            .then(res =>{
                //console.log(res.data)
                setPokemon(res.data)
            })
    }, [props.url]
    )
    

    return(
        <div>
            <p>{pokemon.name}</p>
            {pokemon.sprites && pokemon.sprites.front_shiny && <img src={pokemon.sprites.front_shiny} alt="pokemon"></img>}
        </div>
    )

}

export default Pokemon