import React from 'react'
import './NewsCard.css';

const NewsCard = (props) => {
    
    // const articleDate = (props.article.publishedAt);
    // const date = new Date(articleDate)
    // const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    // console.log(date.toLocaleDateString(), options)
    return (
        <div className="newscard">
            <div className="img-container"><img src={props.article.urlToImage} alt="the news"/></div>
            <div className="article-container">
                <h2 className="heading">{props.article.title}</h2>
                <div className="author-container">
                    <span>Author(s): {props.article.author}</span><span>{props.article.publishedAt}</span>
                </div>
                <div className="news-text">
                    <p>{props.article.content}</p>
                </div>
            </div>
            
        </div>
    )
}

export default NewsCard;
