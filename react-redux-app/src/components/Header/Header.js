import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

import './Header.scss'

const Headline = () => {
    return (
        <div className='headline'>
            <Header as='h1' icon>
            <Icon  name='baseball ball' size='tiny' />
            2019 Oakland Athletics
            <Header.Subheader>
                40-Man Roster
            </Header.Subheader>
        </Header>
        </div>
        
    )
}

export default Headline;