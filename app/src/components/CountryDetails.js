import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, Typography, Card, CardContent, CardHeader, List, ListItem, ListItemText, Divider, makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(2),
        // height: '100%',
        width: '100%'
    },
    titleDivider: {
        marginBottom: theme.spacing(2)
    },
    card: {
        marginTop: theme.spacing(2)
    }
}))

const CountryDetails = () => {
    const countryData = useSelector(state => state.countryData);
    const { container, card, titleDivider } = styles();
    
    return (
        countryData ? 
            <Container className={container}>
                <Typography variant='h3' component='h1'>{countryData.Country}</Typography>
                <Typography variant='h5' component='h2'>Covid Tracker</Typography>
                <Divider className={titleDivider}  />
                <Grid container direction='column' alignItems='center' justify='center'>
                    <Card xs={12} md={6} className={card}>
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
                </Grid>
            </Container>
        : null
    )
}

export default CountryDetails
