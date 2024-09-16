import React from 'react'; 
import AppBar from '@material-ui/core/AppBar'; 
import Toolbar from '@material-ui/core/Toolbar'; 
import Typography from '@material-ui/core/Typography'; 

const NavBar = () => {

    return (
        <div>
            <AppBar position="static" style={{ backgroundColor: 'indianRed' }}>
                <Toolbar>
                    <Typography variant="title" style={{ color: 'black', fontWeight: '600' }}>
                        Trivi-O-Matic
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar; 