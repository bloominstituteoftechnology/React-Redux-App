import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import Table from './Table';
import CountryDetails from './CountryDetails';

const CovidTracker = () => {
    const { data, loading } = useSelector(state => state);
    
    return (
        loading ? <CircularProgress /> :
        <Fragment>
            <Grid container justify='space-around'>
                <Grid item><Table /></Grid>
                <Grid item><CountryDetails /></Grid>
            </Grid>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </Fragment>
    )
}

export default CovidTracker
