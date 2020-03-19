import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import Table from './Table';
import CountryDetails from './CountryDetails';

const CovidTracker = () => {
    const loading = useSelector(state => state.loading);
    
    return (
        <Grid container justify='center' alignItems='center' style={{height: '100vh', overflow: 'hidden'}}>
            { loading ? <CircularProgress /> :
            <Fragment>
                <Grid item xs={3} style={{height: '100%'}}>
                    <Table />
                </Grid>
                <Grid item xs={9} style={{height: '100%'}}>
                    <CountryDetails />
                </Grid>
            </Fragment> }
        </Grid>
    )
}

export default CovidTracker
