import React from 'react';
import { connect } from 'react-redux';
import NewsCard from './NewsCard';
import './NewsList.css'
import { fetchNews } from '../actions/newsActions';

const NewsList = (props) => {
    //console.log(props.fetchNews)
    return (
        <div>
             <button className="button" onClick={(e => {
                    e.preventDefault()
                    props.fetchNews()
                })}>Fetch News</button> 
            <div className="newslist">

                {props.articles.map((article, i) => (
                    <NewsCard key={i} article={article}/>
                ))}
            </div>
         
            
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
