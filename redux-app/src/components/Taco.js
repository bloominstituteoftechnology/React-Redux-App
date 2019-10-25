import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function Taco(props) {

// const [image, setImage] = useState('https://placekeanu.com/350/500/y')
const REACT_APP_ID = process.env.REACT_APP_ID;
const REACT_APP_SECRET = process.env.REACT_APP_SECRET;
console.log("Taco", props)
console.log("categories", props.taco.categories[0].icon)
const image = props.taco.categories[0].icon;

// useEffect(()=>{
//     axios
//     .get(`https://api.foursquare.com/v2/venues/${props.taco.id}?client_id=${REACT_APP_ID}&client_secret=${REACT_APP_SECRET}&v=20180323`)
//     .then(res => {
//         console.log("image", res.data.response.venue.bestPhoto)
//         setImage(`${res.data.response.venue.prefix}300x500${res.data.response.venue.suffix}`)
//     })
// },[])

// To assemble a photo URL, combine the response’s prefix + size + suffix. 
// Example: https://igx.4sqi.net/img/general/300x500/5163668_xXFcZo7sU8aa1ZMhiQ2kIP7NllD48m7qsSwr1mJnFj4.jpg

    return (
        <div className="card">
            <img className="icon" src={`${image.prefix}64${image.suffix}`}/>
            <div className="info">
                <h2>{props.taco.name}</h2>
                <h3>{props.taco.location.formattedAddress[0]}</h3>
            </div>
        </div>
    )
}
