import React, {useEffect, useState} from 'react'
import axios from 'axios';



function PokemonDets(props) {
    const [details, setDetails]=useState([])
    useEffect(()=>{
        axios.get(props.data.url)
        .then(res=>setDetails(res.data))
    },[])
    return (
        <div>
            <h1>{props.data.name}</h1>
            <p>height:{details.height}</p>
    <p>weight:{details.weight}</p>
        </div>
    )
}

export default PokemonDets
