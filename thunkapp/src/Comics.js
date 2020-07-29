import React from 'react'
import Comic from './Comic'
import { connect } from 'react-redux'
import{getPics} from './actions'

const Comics = (props) => {
    console.log('comics' ,props)
    return(
        <>
        {props.pics.map(pic=>
        <Comic key={pic} pic={pic}/>    
        )}
        
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

