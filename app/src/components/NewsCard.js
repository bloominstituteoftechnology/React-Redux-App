import React from 'react'
import { Card, CardHeader } from '@material-ui/core'

const NewsCard = ({ article }) => {
    return (
        <Card>
            <CardHeader title={article.title} subheader={article.description} />
        </Card>
    )
}

export default NewsCard
