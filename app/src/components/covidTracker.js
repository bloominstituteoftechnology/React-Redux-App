import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress, Grid } from '@material-ui/core';
import Table from './Table';
import CountryDetails from './CountryDetails';
import News from './News';
import Scrollbars from 'react-custom-scrollbars';

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
                    <Scrollbars style={{overflowX:'hidden'}}>
                        <CountryDetails />
                        <News />
                    </Scrollbars>
                </Grid>
            </Fragment> }
        </Grid>
    )
}

export default CovidTracker
