import React from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { toggleMobile } from '../actions/covidTracker';
import { fetchTopHeadlines } from '../actions/covidTracker';

// material-ui
import { makeStyles, AppBar, Toolbar, IconButton, Typography, Box, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    menuButton: {
        // marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        }
    },
    headlinesButton: {
        color: '#fff',
        marginLeft: 'auto'
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
                    <Box component='span' marginLeft={{ xs: 'none', sm: '300px' }}>
                        COVID News
                    </Box>
                </Typography>
                <Button className={classes.headlinesButton} onClick={() => dispatch(fetchTopHeadlines())}>Top Headlines</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
