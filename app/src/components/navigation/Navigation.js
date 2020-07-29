import React from 'react';

import './Navigation.css';

const Navigation = (props) => {
    return(
        <div className='navbar'>
            <section className='logo-container'>
                <h1>LambdaWeather</h1>
            </section>
            <section className='menu-container'>
                <a href='/about'>About</a>
            </section>
        </div>
    );
};

export default Navigation;