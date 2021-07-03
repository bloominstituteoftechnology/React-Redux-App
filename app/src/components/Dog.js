import React from 'react'
import '../components/Dog.css'


const Dog = (props) => {
    return (
<div className='pokecard'>
    {props.dogImg ? <img src={props.dogImg} alt='dog'/> : <h4>The domesticated dog may outlive humanity*</h4> }
      <h3>{props.error}</h3>
    </div>
    )
}

export default Dog;