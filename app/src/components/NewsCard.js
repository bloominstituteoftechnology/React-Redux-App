import React, { useState } from 'react';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, makeStyles, Collapse, CardActions, Typography, IconButton, CardContent, Link, Hidden, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const defaultTheme = createMuiTheme();
const cardTheme = {
    ...defaultTheme,
    overrides: {
        MuiCardContent: {
            root: {
                padding: defaultTheme.spacing(2),
                [defaultTheme.breakpoints.down('sm')]: {
                    padding: '10px 5px 10px 10px !important'
                }
            }
        },
        MuiTypography: {
            h5: {
                fontSize: defaultTheme.typography.h5.fontSize,
                fontWeight: defaultTheme.typography.h5.fontWeight,
                [defaultTheme.breakpoints.down('sm')]: {
                    fontSize: '0.9rem',
                    fontWeight: '500'
                }
            }
        }
    }
}

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        flexWrap: 'nowrap',
        margin: `0 0 15px`
    },
    cardContent: {
        padding: '1 !important'
    },
    image: {
        width: '20%',
        minWidth: '20%'
    },
    articleDescrition: {
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
        articleDescrition,
        expand,
        expandOpen,
        fullArticleContainer,
        collapseIcon,
        subContentContainer,
        cardContent
    } = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <ThemeProvider theme={cardTheme}>
        <Link href={article.url} target='_blank'>
            <Card className={card}>
                <CardMedia className={image} image={article.urlToImage} title={article.title} />
                <CardContent>
                    <CardHeader style={{padding: '0'}} title={article.title} />
                    <Hidden smDown>
                        <div className={subContentContainer}>
                            <Typography className={articleDescrition} variant='body2' >{article.description}</Typography>
                        </div>
                    </Hidden>
                </CardContent>            
            </Card>
        </Link>
        </ThemeProvider>
    )
}

export default NewsCard
