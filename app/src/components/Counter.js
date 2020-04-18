import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../states/actionCreators';


export function Counter({count, increment, decrement, reset}) {
return(<>
    <h1>I am the Counter Component</h1>
    <p>The Count is {count}</p>
    <button onClick={increment}>+</button>&nbsp;
    <button onClick={decrement}>-</button>&nbsp;
    <button onClick={reset}>clear</button>
</>
)
};
export default connect(
    state => state,
    actionCreators,
)(Counter);