import React from 'react';
import {connect} from 'react-redux';
import Loader from 'react-loader-spinner';
import {getSTATUS} from '../actions';

// const Book = props => {
//     console.log(props);
//   return ( <div>
//         <h1>Cats in the Server Room!</h1>
//         {!props.status && !props.isFetching && <p> Now what's gone wrong? </p>}
//         {props.isFetching && (<Loader type="ThreeDots" color="#somecolor" height={80} width={80} />)}
//         {props.status && <p>{props.status}</p>}
//         <button onClick={props.getSTATUS}>More satus codes</button>
//     </div>
//     )
// }

const mapStateToProps = state => {
    return{
        status: state.slip,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, {getSTATUS})(Book);