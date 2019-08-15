import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import Articles from './Articles';

const ArticleContainer = props => {
    return (
        <>
            <Form />
            {props.articles && props.articles.map(article => <Articles content={article}/>)}
        </>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.articles,
    }
}

export default connect(
    mapStateToProps,
    {}
)(ArticleContainer);

