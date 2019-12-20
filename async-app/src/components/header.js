import React from 'react';


const Header = (props) => {

    return(
        <div className='header-container'>
            <h1>Triva Quiz!</h1>
            {console.log(props.state.data)}
            <p>Made with Open Triva Database</p>
           
            <button onClick={props.state.getData}>Get Question</button>
        </div>
    );
}

export default Header;