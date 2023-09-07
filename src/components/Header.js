import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Container,
    IconButton,
    Button,
    Menu,
    MenuItem,
    Box,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from './Logo';
import { navItems } from '../constants';
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position='sticky'>
            <Container maxWidth="lg">

                <Toolbar>
                    <Box flexGrow={1}>
                        <Logo />
                    </Box>

                    {isDesktop ? (
                        <Box>
                            {
                                navItems.map((item, index) => {
                                    return <Button key={item.label} color="inherit">
                                        <Link to={item.path} className='App-link App-menu-link'>
                                            {item.label}
                                        </Link>
                                    </Button>
                                })
                            }
                        </Box>
                    ) : (
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                            <MenuIcon />
                        </IconButton>
                    )}

                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {
                            navItems.map((item, index) => {
                                return <MenuItem key={item.label} onClick={handleClose}>
                                    <Link to={item.path} className='App-link App-menu-link'>
                                        {item.label}
                                    </Link>
                                </MenuItem>
                            }
                            )
                        }
                    </Menu>

                    <Button color="inherit"><AccountCircle /></Button>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
