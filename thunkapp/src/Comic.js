import React from 'react'

const Comic = props => {
    console.log('comic', props)
    return(
        <>
        {/* <h1>{props.pic.name}</h1> */}
        <img src={props.pic}></img>
        </>
    )
}

export default Comic