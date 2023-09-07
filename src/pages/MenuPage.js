import React from 'react';
import { Typography, Grid, Container, Box, Divider } from '@mui/material';
import MenuCard from '../components/MenuCard';
import { menuItems } from '../constants';

const MenuPage = () => {
    let menu = [];
    menuItems.map((item, index) => {
        return menu.push(
            <MenuCard key={index} item={item} />
        )
    });
    return (
        <Container>
            <Box mt={5} mb={5}>
                <Typography variant="h3" align="center">
                    Little Lemon Restaurant Menu
                </Typography>
                <Divider variant="middle" sx={{ my: 2 }} />
                <Grid container spacing={3}>
                    {menu}
                </Grid>
            </Box>
        </Container>
    );
}

export default MenuPage;
