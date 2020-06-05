import React, { Fragment } from 'react';
// Redux
import { useSelector } from 'react-redux';
// Material-ui
import { CircularProgress, Grid, makeStyles } from '@material-ui/core';

import Scrollbars from 'react-custom-scrollbars';
// Components
import CountryDetails from './CountryDetails';
import News from './News';
import CountriesList from './CountriesList';
import Navbar from './Navbar';
import MapChart from './Map/MapChart';

const navbarHeight = '70px';

const useStyles = makeStyles(theme => ({
    content: {
        height: '100%',
        flexGrow: 1,
        paddingTop: navbarHeight
    }
}));

const CovidTracker = () => {
    const loading = useSelector(state => state.loading);
    const classes = useStyles();
    return (
        <Grid container justify='center' alignItems='center' style={{height: '100vh', overflow: 'hidden'}}>
            { loading ? <CircularProgress /> :
            <Fragment>
                <Navbar navHeight={navbarHeight} />
                <CountriesList />
                <main className={classes.content}>
                    <Scrollbars style={{overflowX:'hidden'}}>
                        <CountryDetails />
                        <MapChart />
                        <News />
                    </Scrollbars>
                </main>
            </Fragment> }
        </Grid>
    )
}

export default CovidTracker
