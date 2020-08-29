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
            <h2>Today Joke:</h2>
            {
                props.news.map((item)=>
            <div key={item.id}>
            <p >{item.author}</p>
            <p>{item.title}</p>
            </div>
           
           
            
                )
            }
           
            <button onClick={props.getNews}>GeJOKE</button>
            
         
        </>
    )
};

const mapStateToProps = (state) => {
    return { news: state.news, isFetching: state.isFetching }
};

const mapDispatchToProps = { getNews };

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
