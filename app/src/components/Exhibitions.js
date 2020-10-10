import React from 'react';
import Exhibition from './components/Exhibition';
import 'semantic-ui-css/semantic.min.css';

const Exhibitions = (props) => {
    console.log(props)
    return (
        <div>
            {props.exhibits.map(item => (
                <Exhibition key={item.id} exhibit={item} />
            ))}
        </div>
    )
}

export default Exhibitions;