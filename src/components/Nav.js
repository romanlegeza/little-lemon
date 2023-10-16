import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from '@mui/material/useMediaQuery';
import { navItems } from '../constants';
import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';


const Nav = (props) => {
    const isHeader = props.isHeader || false;
    const [anchorEl, setAnchorEl] = useState(null);
    const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const DesktopMenu = () => (
        <Box display={isHeader ? "flex" : "block"} gap={2}>
            {navItems.map((item, index) => (
                <Button key={index} onClick={handleClick}>
                    <Link to={item.path} className='App-link App-menu-link' >
                        {item.label}
                    </Link>
                </Button>
            ))}
        </Box>
    );

    const MobileMenu = () => (
        <div className='mobile-menu-icon'>
            <IconButton size='meduim' color='secondary' onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                {navItems.map((item, index) => (
                    <MenuItem key={index} onClick={handleClose}>
                        <Link to={item.path} className='App-link App-menu-link'>
                            {item.label}
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );

    return (
        <div>
            {isDesktop ? <DesktopMenu /> : <MobileMenu />}
        </div>
    );
}

export default Nav;
