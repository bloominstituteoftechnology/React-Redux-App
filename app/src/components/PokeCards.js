import React from 'react'
import Poke from './Poke'

const PokeCard = () => {
    return (
        <>
        <Poke />
        <div className='buttons'>
        <button>Previous</button>
        <button>Next</button>
      </div>
      </>
    )
}

export default PokeCard;