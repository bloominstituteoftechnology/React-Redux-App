import React from 'react';
import Loader from 'react-loader-spinner';

const Header = (props) => {

    return(
        <div>
            <h1>Triva Quiz!</h1>
            {console.log(props.state)}
            {!props.state.isFetching && props.state.questions.length < 1 && <p>Load a Question!</p>}
            {props.state.isFetching && <p>Loading Question! </p>}
            {props.state.isFetching && ( 
        <Loader type="ThreeDots" color="#00BFFF" height={100} width={100} />
      )}
            <button onClick={props.state.getData}>Get Question</button>
        </div>
    );
}

export default Header;