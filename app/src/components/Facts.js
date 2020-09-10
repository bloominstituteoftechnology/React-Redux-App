import React from 'react'
import {connect } from 'react-redux'
import Holidays from './Holidays'

function Facts(props) {
    return (
        <>
        <h2> Europa</h2>
        {props.facts.map((fact) => {
            return <Holidays fact={fact} />
        })}
        </>
    )
}

function mapStateToProps(state) {
    return {
        facts: state.facts
    }
}

export default connect(mapStateToProps, {})(Facts)