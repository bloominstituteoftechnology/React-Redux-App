import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, Typography, Divider, makeStyles } from '@material-ui/core';

const styles = makeStyles(theme => ({
    container: {
        padding: theme.spacing(2),
        // height: '100%',
        width: '100%'
    },
    titleDivider: {
        marginBottom: theme.spacing(2)
    },
    detailsContainer: {
        maxWidth: theme.breakpoints.values.sm
    },
    totalCases: {
        fontWeight: 'bold',
        color: theme.palette.primary.light
    }
}))

const CountryDetails = () => {
    const countryData = useSelector(state => state.countryData);
    const { container, titleDivider, totalCases, detailsContainer } = styles();

    const myRef = React.createRef();
    useEffect(() => {
        if(countryData) {
            myRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }, [countryData])
    
    return (
        countryData ? 
        <div ref={myRef}>
            <Container className={container}>
                <Typography variant='h3' component='h1'>{countryData.Country}</Typography>
                <Typography variant='h5' component='h2'>Covid Tracker</Typography>
                <Divider className={titleDivider}  />
                <Grid container className={detailsContainer} direction='column' alignItems='flex-start' justify='flex-start'>
                    <Grid container item xs='300'>
                        <Grid item xs={8}>
                            <Typography variant='h6'>Total confirmed cases:</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant='h6' className={totalCases}>{countryData.TotalConfirmed}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item container xs={8} alignItems='center'>
                            <span style={{fontSize: '32px', color: 'green', lineHeight: '1rem'}}>•</span>
                            <Typography> Recovered cases:</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>{ countryData.TotalRecovered === 0 ? '-' : countryData.TotalRecovered }</Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item container xs={8} alignItems='center'>
                            <span style={{fontSize: '32px', color: 'darkred', lineHeight: '1rem'}}>•</span>
                            <Typography> Faltal cases:</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>{ countryData.TotalDeaths }</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
            </div>
        : null
    )
}

export default CountryDetails
