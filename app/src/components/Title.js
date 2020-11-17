import React from "react";
import {connect} from "react-redux"

const Title = (props) => {
    return(
        <h1>NASA Photos</h1>
    )
}

const mapStateToProps = (state) => {
    return {
        is_fetching: state.is_fetching,
        items: state.item,
        error: state.error

    }
}

export default connect(mapStateToProps, {})(Title)
