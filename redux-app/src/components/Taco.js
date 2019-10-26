import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Taco(props) {

// const [image, setImage] = useState('https://placekeanu.com/350/500/y')
const REACT_APP_ID = process.env.REACT_APP_ID;
const REACT_APP_SECRET = process.env.REACT_APP_SECRET;
console.log("Taco", props)
console.log("categories", props.taco.categories[0])
// const image = ;

const [newImage, setImg] = useState('https://picsum.photos/64/64?random=1?grayscale')

useEffect(()=>{
    if(props.taco.categories[0]){
        setImg(`${props.taco.categories[0].icon.prefix}64${props.taco.categories[0].icon.suffix}`)
    }else{
        console.log(props.taco)
    }
},[])

// To assemble a photo URL, combine the response’s prefix + size + suffix. 
// Example: https://igx.4sqi.net/img/general/300x500/5163668_xXFcZo7sU8aa1ZMhiQ2kIP7NllD48m7qsSwr1mJnFj4.jpg

    return (
        <div className="card">
            <img className="icon" src={newImage}/>
            <div className="info">
                <h2>{props.taco.name}</h2>
                <h4>{props.taco.location.formattedAddress[0]}</h4>
            </div>
        </div>
    )
}
