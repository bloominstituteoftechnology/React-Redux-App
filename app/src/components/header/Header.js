import React from 'react';

import Navigation from '../navigation/Navigation';

import './Header.css';

const Header = (props) => {
    return(
        <div className='site-header'>
            <Navigation />
        </div>
    )
};

export default Header;