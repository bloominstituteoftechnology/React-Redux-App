import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@material-ui/core';
import NewsCard from './NewsCard';

const News = () => {
    const news = useSelector(state => state.country.news);
    return (
        <div>
            {news.length > 0 ? 
                <Fragment>
                    <Typography variant='h5' conponent='h3'>News</Typography>
                    { news.map((article, i) => (
                        <NewsCard key={i} article={article} />
                    ))}
                </Fragment>
                : null
            }
        </div>
    )
}

export default News
