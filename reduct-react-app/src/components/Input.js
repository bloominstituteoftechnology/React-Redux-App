import React from 'react';

function Input() {
    return (
        <form>
            <input type="text"
                   name="name"
                   placeholder="Enter Name"
                />
            <button>Enter</button>
        </form>
    )
}

export default Input;