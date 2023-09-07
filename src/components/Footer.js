import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { navItems } from '../constants';

const Footer = () => {

    return (
        <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 6 }}>
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6">About Little Lemon</Typography>
                        <Typography>
                            We offer the finest Mediterranean cuisine made with fresh ingredients.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6">Quick Links</Typography>
                        <Box>
                            {
                                navItems.map((item, index) => {
                                    return <div key={item.label}><Link to={item.path} className='App-link App-menu-link'>{item.label}</Link></div>
                                })
                            }
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6">Contact</Typography>
                        <Typography>
                            123 Food St.<br />
                            Culinary City<br />
                            12345
                        </Typography>
                    </Grid>
                </Grid>

                <Box mt={5}>
                    <Typography variant="body2" align="center">
                        © 2023 Little Lemon, All Rights Reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
