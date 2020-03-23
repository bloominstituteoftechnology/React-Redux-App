import React from 'react';
import { Card, CardHeader, CardMedia, makeStyles, Typography, CardContent, Link, Hidden, createMuiTheme, ThemeProvider } from '@material-ui/core';

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
                lineHeight: defaultTheme.typography.h5.lineHeight,
                [defaultTheme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                    lineHeight: '1.1rem'
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
    }
}));

const NewsCard = ({ article }) => {
    const {
        card,
        image,
        articleDescrition,
        subContentContainer,
    } = useStyles();

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
