import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

export const Navbar: React.FunctionComponent = () => (
    <div>
        <AppBar position="static">
            <Toolbar className='navbar-main'>
                <Typography variant="h6" className='title'>Наша фирма</Typography>
                <div>
                    <NavLink to="/items" style={{ textDecoration: 'none' }}>
                        <Button color="inherit" style={{ backgroundColor: 'white', color: 'black', marginRight: '7px' }}>Товары</Button>
                    </NavLink>
                    <NavLink to="/about" style={{ textDecoration: 'none' }}>
                        <Button color="inherit" style={{ backgroundColor: 'white', color: 'black' }}>О нас</Button>
                    </NavLink>
                </div>
            </Toolbar>
        </AppBar>
    </div>
)