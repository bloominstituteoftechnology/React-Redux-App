import React from 'react'
import Fragment from './Fragment'

const Fragments = (props) => {
    return(
        <>
        {props.objects.map(item => <Fragment key={item.objectid} {...item} />)}
        </>
    )
}

export default Fragments