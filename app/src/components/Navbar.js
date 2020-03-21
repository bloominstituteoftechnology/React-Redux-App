import React from 'react';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobile } from '../actions/covidTracker';

// material-ui
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Box } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    menuButton: {
        // marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        }
    }
}))

const Navbar = ({ navHeihgt }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleDrawerToggle = () => {
        dispatch(toggleMobile());
    }

    return (
        <AppBar position="fixed" style={{ height: navHeihgt }}>
            <Toolbar>
            <IconButton
                color="inherit"
                aria-label="Open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
            >
                <Menu />
            </IconButton>
            <Typography variant="h6" noWrap>
                <Box component='span' margin={{ xs: 'none', sm: '300px' }}>
                    Corona News
                </Box>
            </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
