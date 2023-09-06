import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { default as Grid, default as Item } from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React from 'react';

const UserTestimonialCard = (props) => {
    const item = props.item;
    return (
        <Grid item md={3}>
            <Item>
                <Card elevation={5} sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt={item.name}
                        height="140"
                        image={item.photo}
                    />
                    <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                {item.rating} Stars
                            </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary">
                            {item.review}
                        </Typography>
                    </CardContent>
                </Card>
            </Item>
        </Grid>
    );
};

export default UserTestimonialCard;
