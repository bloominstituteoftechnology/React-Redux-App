import React from 'react';

const Quote = ({ quote, isFetching, error }) => {
    return (
        <div>
            <h2>Kanye says...</h2>
            <button>Get New Quote</button>
        </div>
    );
};

export default Quote;