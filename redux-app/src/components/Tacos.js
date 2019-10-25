import React from 'react'

export default function DogList(props) {
    console.log("Dogs", props)
    return (
        <div>
            <h1>Tacos</h1>

                {props.venues.map((item) => {
                return <h1>{item.name}</h1>
                })}
        </div>
    )
}
