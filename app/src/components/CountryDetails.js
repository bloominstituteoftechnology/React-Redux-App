import React from 'react';
import News from './News';
import { useSelector } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { Container, Grid, Typography, Card, CardContent, CardHeader, List, ListItem, ListItemText, Divider, makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(2),
        height: '100%',
        width: '100%'
    },
    titleDivider: {
        marginBottom: theme.spacing(2)
    },
    card: {
        width: '40%',
        marginTop: theme.spacing(2)
    }
}))

const CountryDetails = () => {
    const countryData = useSelector(state => state.country.data);
    const { container, card, titleDivider } = styles();
    return (
        countryData ? 
        <Scrollbars style={{overflowX:'hidden'}}>
            <Container className={container}>
                <Typography variant='h2'>{countryData.Country}</Typography>
                <Typography variant='h5' component='h1'>Covid 19</Typography>
                <Divider className={titleDivider}  />
                <Grid container direction='column' alignItems='center' justify='center'>
                    <Card className={card}>
                        <CardHeader title={`Total confirmed cases:\n${countryData.TotalConfirmed}`} />
                        <CardContent>
                            <List>
                                <ListItem>
                                    <ListItemText primary='Recovered cases:' />
                                    <Typography>{ countryData.TotalRecovered }</Typography>
                                </ListItem>
                                <ListItem>
                                    <ListItemText primary='Fatal cases:' />
                                    <Typography>{ countryData.TotalDeaths }</Typography>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                    <News />
                </Grid>
            </Container>
        </Scrollbars>
        : null
    )
}

export default CountryDetails
