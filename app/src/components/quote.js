import React from 'react';
import {connect} from 'react-redux';

const Quotes = props =>{
    console.log(props)
    return (
        <div>
                <h2>{props.quote.author}</h2>
                <h3>{props.quote.content}</h3>
            </div>
        )}
 

const mapTheProps = state => {
    return {
        quote: state.quote,
        error: state.error
    }
}
export default connect(mapTheProps, {})(Quotes)