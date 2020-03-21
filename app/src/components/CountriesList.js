import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleMobile } from '../actions/covidTracker';
// Components
import Table from './Table';
// material-ui
import { makeStyles, Hidden, Drawer } from '@material-ui/core';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
    countriesList: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    content: {
        height: '100%',
        flexGrow: 1
    }
}));

const CountriesList = () => {
    const classes = useStyles();
    const mobileOpen = useSelector(state => state.mobileOpen);
    const dispatch = useDispatch();

    const handleDrawerToggle = () => {
        dispatch(toggleMobile());
    }
    

    return (
        <nav className={classes.countriesList} aria-label="Countries List">
            <Hidden xsDown>
                <Drawer anchor='left' open variant='permanent' >
                    <div style={{height: '100%', width: `${drawerWidth}px`}}>
                        <Table />
                    </div>
                </Drawer>
            </Hidden>
            <Hidden smUp>
                <Drawer variant='temporary' anchor='left' open={mobileOpen} onClose={handleDrawerToggle}>
                    <div style={{height: '100%', width: `${drawerWidth}px`}}>
                        <Table />
                    </div>
                </Drawer>
            </Hidden>
        </nav>
    )
}

export default CountriesList
