import React from 'react'
import Comic from './Comic'
import { connect } from 'react-redux'
import{getPics} from './actions'
import {Col} from 'reactstrap'

const Comics = (props) => {
    console.log('comics' ,props)
    return(
        <>
            <h2 style={{color:'red'}}>{props.err}</h2>
            <Col sm='5'>
                {props.pics.map(pic=>
                <Comic key={pic} pic={pic}/>    
                )}
            
            </Col>
        </>
    )
}
const mapStateToProps = state => ({
    pics: state.pics,
    err: state.err
  })



export default connect(
    mapStateToProps,
    {getPics})(Comics);

