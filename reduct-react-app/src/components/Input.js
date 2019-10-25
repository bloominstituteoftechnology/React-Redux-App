import React from 'react';

function Input(props) {
    return (
        <form>
            <input type="text"
                   name="name"
                   placeholder="Enter Name"
                />
            <button className="enter">Enter</button>
        </form>
    )
}

export default Input;