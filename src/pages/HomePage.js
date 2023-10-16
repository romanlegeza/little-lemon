import React from "react";
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { default as Grid, default as Item } from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import MenuCard from "../components/MenuCard";
import UserTestimonialCard from "../components/UserTestimonialCard";
import { menuItems, testimonialsItems } from "../constants";
import restaurant from "../images/restaurant.jpg";


const HomePage = () => {
    let menu = [];
    menuItems.map((item, index) => {
        return menu.push(
            <MenuCard key={index} item={item} />
        )
    });

    let testimonials = [];
    testimonialsItems.map((item, index) => {
        return testimonials.push(
            <UserTestimonialCard key={index} item={item} />
        )
    });

    return (
        <Grid container sx={{ p: 2, maxWidth: 1024 }} spacing={2}>
            <Grid item md={12}>
                <Item>
                    <Card>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={restaurant}
                            title="Little Lemon"
                        />
                        <CardContent className="App-yellow">
                            <Typography gutterBottom variant="h4" component="div">
                                Little Lemon
                            </Typography>
                            <Typography gutterBottom variant="h6" component="div">
                                Chicago
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                                aliquet, ipsum vitae semper pretium, elit arcu luctus arcu, quis
                                porttitor turpis odio sit amet ligula. Donec euismod, velit vitae
                                vestibulum ultricies, lorem urna ultricies massa, quis dignissim
                                urna nunc quis libero. Nulla facilisi.
                            </Typography>
                        </CardContent>
                        <CardActions className="App-yellow">
                            <Button variant="contained">
                                <Link to="/reservations" className="App-link App-white">
                                    Reserve a table
                                </Link>
                            </Button>
                        </CardActions>
                    </Card>
                </Item>
            </Grid>
            <Grid item xs={12}>
                <Item>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography gutterBottom variant="h6" component="div">
                            Specials
                        </Typography>
                        <Button variant="contained" color="primary">
                            <Link to="/menu" className="App-link App-white">
                                Online Menu
                            </Link>
                        </Button>
                    </Box>
                </Item>
            </Grid>
            {menu}
            <Grid item xs={12}>
                <Item>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography gutterBottom variant="h6" component="div">
                            Testimonials
                        </Typography>
                        <Button variant="contained" color="primary">
                            <Link to="/testimonials" className="App-link App-white">
                                More Testimonials
                            </Link>
                        </Button>
                    </Box>
                </Item>
            </Grid>
            {testimonials}
        </Grid >
    );
}

export default HomePage;