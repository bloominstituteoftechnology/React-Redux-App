import React, { useState } from 'react';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, makeStyles, Collapse, CardActions, Typography, IconButton, CardContent, Link } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        flexWrap: 'wrap',
        margin: theme.spacing(2)
    },
    image: {
        width: '20%'
    },
    content: {
        width: '80%'
    },
    articleDescrition: {
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        color: theme.palette.text.secondary
    },
    subContentContainer: {
        display: 'flex'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    fullArticleContainer: {
        width: '100%'
    }
}));

const NewsCard = ({ article }) => {
    const {
        card,
        image,
        content,
        articleDescrition,
        expand,
        expandOpen,
        fullArticleContainer,
        collapseIcon,
        subContentContainer
    } = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <Link href={article.url} target='_blank'>
            <Card className={card}>
                <CardMedia className={image} image={article.urlToImage} title="Live from space album cover" />
                <CardContent className={content}>
                    <CardHeader title={article.title} />
                    <div className={subContentContainer}>
                        <Typography className={articleDescrition} variant='body2' >{article.description}</Typography>
                        {/* <CardActions className={collapseIcon} disableSpacing>
                            <IconButton onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more"
                            className={clsx(expand, {
                                [expandOpen]: expanded,
                            })} >
                                <ExpandMore />
                            </IconButton>
                        </CardActions> */}
                    </div>
                </CardContent>            
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent className={fullArticleContainer}>
                        <Typography paragraph>
                            {article.content}
                        </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Link>
    )
}

export default NewsCard
