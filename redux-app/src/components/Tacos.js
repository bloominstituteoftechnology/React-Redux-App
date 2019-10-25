import React from 'react'
import Taco from './Taco'

export default function DogList(props) {
    console.log("Tacos", props)
    return (
        <div>
            <h1>Detroit Tacos</h1>

                {props.venues.map((item, index) => (<Taco taco={item} key={index}/>)
                )}
        </div>
    )
}
