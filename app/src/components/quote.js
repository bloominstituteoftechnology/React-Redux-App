import React from 'react';
import {connect} from 'react-redux';

const Quotes = props =>{
    console.log(props)
    return (
        <div>
                <h2><u>{props.quote.author}</u></h2>
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