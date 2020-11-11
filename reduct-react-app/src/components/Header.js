import React from 'react';
import Input from './Input';

function Header(props) {
    function sayHello() {
        alert("Okay, You may enter your name below IF YOU DARE!!!")
    }
    return (
        <div>
            <h1>Welcome User </h1>
            <p>Are you the chosen one?</p>
            <button onClick={sayHello} className="Dare">Click here to see If YOU are WORTHY</button>
        </div>
        
    )
}

export default Header;