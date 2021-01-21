import React from 'react'
import '../components/Dog.css'


const Dog = (props) => {
    return (
<div className='pokecard'>
      <img src={props.dogImg} alt='dog' />
      <h3>{props.error}</h3>
    </div>
    )
}

export default Dog;