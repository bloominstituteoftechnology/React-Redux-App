import React, { useEffect } from "react";
import { connect } from "react-redux";
import {getNews} from "../actions/newsListActions";



const NewsList = (props) => {
//    useEffect(() => {
//         getNews();
//     }, [getNews]);

//     if (isFetching) {
//         return (
//             <h2>Loading</h2>
//         )
//     }
    console.log("news",props);
    return (
        <>
            <h2>Today Joke:{props.news}</h2>
            <p></p>
           
            <button onClick={props.getNews}>GeJOKE</button>
            
         
        </>
    )
};

const mapStateToProps = (state) => {
    return { news: state.news, isFetching: state.isFetching }
};

const mapDispatchToProps = { getNews };

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
