import React, { useEffect } from "react";
import { connect } from "react-redux";
import {getNews} from "../actions";



const NewsList = ({ getNews }, news, isFetching) => {
    useEffect(() => {
        getNews();
    }, [getNews]);

    if (isFetching) {
        return (
            <h2>Loading</h2>
        )
    }
    return (
        <>
            <h2>Today Headline</h2>
            <p>
                {news}
            </p>
        </>
    )
};

const mapStateToProps = (state) => {
    return { news: state.news, isFetching: state.isFetching }
};

const mapDispatchToProps = { getNews };

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
