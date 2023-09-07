import React, { useState } from 'react';
import {
    Container, Box, Typography, Card, CardContent, CardActions, Button,
} from '@mui/material';
import { menuItems } from '../constants';

const OrderOnlinePage = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };

    return (
        <Container>
            <Box mt={5} mb={5}>
                <Typography variant="h3" align="center">
                    Order Online
                </Typography>

                <Box mt={3}>
                    {menuItems.map((item, index) => (
                        <Card key={index} sx={{ mb: 2 }}>
                            <CardContent>
                                <Typography variant="h6">{item.title}</Typography>
                                <Typography variant="subtitle1">${item.price}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => addToCart(item)}
                                >
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>

                <Box mt={5}>
                    <Typography variant="h4">Your Cart</Typography>
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index}>
                                {item.title} - ${item.price}
                            </li>
                        ))}
                    </ul>
                </Box>

                {cart.length > 0 && (
                    <Button variant="contained" color="secondary">
                        Proceed to Checkout
                    </Button>
                )}
            </Box>
        </Container>
    );
};

export default OrderOnlinePage;
