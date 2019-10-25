import React from 'react'
import Taco from './Taco'

export default function TacoList(props) {
    console.log("Tacos", props)
    return (
        <div>
            <h1>{props.newLocation} {props.newType}</h1>

                {props.venues.map((item, index) => (<Taco taco={item} key={index}/>)
                )}
        </div>
    )
}
