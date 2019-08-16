import React from 'react'

const Lyric = props => {

    console.log('props.lyrics',props.lyrics)
    return (
        <div className='song'>
            <p>{props.lyrics}</p>
        </div>
    )
}

export default Lyric; 