import React, { useState } from 'react';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, makeStyles, Collapse, CardActions, Typography, IconButton, CardContent, Link, Hidden, createMuiTheme, ThemeProvider } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const defaultTheme = createMuiTheme();
const cardTheme = {
    ...defaultTheme,
    overrides: {
        MuiTypography: {
            h5: {
                fontSize: defaultTheme.typography.h5.fontSize,
                fontWeight: defaultTheme.typography.h5.fontWeight,
                [defaultTheme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                    fontWeight: 'bold'
                }
            }
        }
    }
}

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
        flexWrap: 'nowrap',
        margin: theme.spacing(2)
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
        subContentContainer
    } = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <ThemeProvider theme={cardTheme}>
        <Link href={article.url} target='_blank'>
            <Card className={card}>
                <Hidden smDown>
                    <CardMedia className={image} image={article.urlToImage} title="Live from space album cover" />
                </Hidden>
                <CardContent>
                    <CardHeader style={{padding: '0'}} title={article.title} />
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
        </ThemeProvider>
    )
}

export default NewsCard
