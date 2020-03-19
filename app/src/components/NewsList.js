import React from 'react';
import { connect } from 'react-redux';
import NewsCard from './NewsCard';
import { fetchNews } from '../actions/newsActions';

const NewsList = (props) => {
    //console.log(props.fetchNews)
    return (
        <div className="newslist">
             <button onClick={(e => {
                e.preventDefault()
                props.fetchNews()
            })}>fetch News</button> 

        {props.articles.map((article, i) => (
            <NewsCard key={i} article={article}/>
        ))}
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        articles: state.articles,
        isLoading: state.isLoading
    }
}

// const mapDispatchToProps = () => {
//     fetchNews()
// }

export default connect(mapStateToProps, {fetchNews})(NewsList);
