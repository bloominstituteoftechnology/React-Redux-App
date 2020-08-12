import React from 'react'
import { connect } from 'react-redux'

export function Quotes(props) {

    return (
        <div>
            <h1>Progammer Quotes</h1>
            {props.isLoading ? <h2>Loading...</h2>: null}
            {props.error ? <h2>There has been an error.</h2> : null}

            <h2>{props.en}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        en: state.en,
        author: state.author,
        isLoading: false,
        error: ''
    }
}
export default connect(mapStateToProps, {})(Quotes)
