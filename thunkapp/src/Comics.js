import React from 'react'
import Comic from './Comic'
import { connect } from 'react-redux'
import{getPics} from './actions'

const Comics = () => {
    return(
        <>
        <Comic/>
        </>
    )
}
const mapStateToProps = state => {
    pics = state.pics
    err = state.err
  }

export default connect(
    mapStateToProps,
    {getPics})(Comics);

