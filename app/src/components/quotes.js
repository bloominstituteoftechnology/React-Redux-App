import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchQuote } from '../store/actions/actions'

export function Quotes(props) {
    useEffect(() => {
        props.fetchQuote()
    }, [])
    console.log(props)
    return (
        <div>
            <h1>Progammer Quotes</h1>
            {props.isLoading ? <h2>Loading...</h2> : null}
            {props.error ? <h2>There has been an error.</h2> : null}


            <h2>{props.en}</h2>
            <p>{props.author}</p>
            <div>
                <button onClick={()=>props.fetchQuote()}>New Quote</button>
            </div>

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
export default connect(mapStateToProps, { fetchQuote })(Quotes)
