import { DeliveryDining } from '@mui/icons-material';
import { CardActions } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { default as Grid, default as Item } from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';


const UserTestimonialCard = (props) => {
    const item = props.item;
    return (
        <Grid item md={4}>
            <Item>
                <Card elevation={5} sx={{ minHeight: 340 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={item.image}
                        title={item.title}
                    />
                    <CardContent sx={{ height: 100 }}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom variant="h6" component="div">
                                {item.title}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                ${item.price}
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link to="/order-online" className="App-link">
                            Order a delivery <DeliveryDining />
                        </Link>
                    </CardActions>
                </Card>
            </Item>
        </Grid>
    );
};

export default UserTestimonialCard;