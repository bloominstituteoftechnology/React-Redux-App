import React from 'react';
import Exhibition from './Exhibition'
import 'semantic-ui-css/semantic.min.css';

const Exhibitions = (props) => {
    console.log(props.exhibits)
    return (
        <div>
            
            <Exhibition exhibit={props.exhibits} />

        </div>
    )
}

export default Exhibitions