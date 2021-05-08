import React from 'react'
import {Card, CardImg} from 'reactstrap'

const Comic = props => {
    console.log('comic', props)
    return(
        <Card>

        <CardImg width='100%' src={props.pic}></CardImg>
        </Card>
    )
}

export default Comic