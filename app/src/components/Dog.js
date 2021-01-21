import React from 'react'


const Dog = (props) => {
    return (
<div className='pokecard'>
      <img src={props.dogImg} alt='dog' />
      <h3>{props.error}</h3>
    </div>
    )
}

export default Dog;