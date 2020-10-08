import React from 'react'
import './PokemonCard.css'

function PokemonCard({ eachPokemon }) {
   return (
      <div className='pokemon__card'>
         <img src={eachPokemon.imageUrlHiRes} alt={`${eachPokemon.name} card information`} />
      </div>
   )
}

export default PokemonCard
