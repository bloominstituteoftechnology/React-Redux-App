import React from 'react';
import { connect } from 'react-redux';
import NewsCard from './NewsCard';
import { fetchNews } from '../actions/newsActions';

const NewsList = (props) => {
    //console.log(props.fetchNews)
    return (
        <div>
            <NewsCard />
            {!props.isLoading ? <button onClick={(e => {
                e.preventDefault()
                props.fetchNews()
            })}>fetch News</button> : <p>{props.articles[0].title}</p>}
            
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
