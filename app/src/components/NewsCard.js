import React from 'react'

const NewsCard = (props) => {
    console.log(props)
    return (
        <div className="newscard">
            <div className="img-container"><img src alt=""/></div>
            <div className="article-container">
                <h3 className="heading">Heading</h3>
                <div className="name-date-container">
                    <span>author</span><span>date</span>
                </div>
                <div className="news-text">
                    <p>News</p>
                </div>
            </div>
            
        </div>
    )
}

export default NewsCard;
