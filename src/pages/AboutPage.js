import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

const AboutUs = () => {
    return (
        <Container>
            <Box mt={5} mb={5}>
                <Typography variant="h3" align="center">
                    About Little Lemon Restaurant
                </Typography>
                <Divider variant="middle" sx={{ my: 2 }} />

                <Typography variant="h4">
                    A Citrus Twist to Culinary Excellence
                </Typography>
                <Typography variant="body1" paragraph>
                    Welcome to Little Lemon, where the zest of life meets the richness of culinary traditions. We are more than just a restaurant; we are an experience that celebrates the flavors of the world through a lens tinted with a touch of citrus.
                </Typography>

                <Typography variant="h5">
                    Our Story
                </Typography>
                <Typography variant="body1" paragraph>
                    Established in 2015, Little Lemon came to life out of a passion for bringing people together over good food. Our founders, Emily and Tim, believed in the transformative power of a shared meal. They scoured local markets, explored international cuisines, and studied classic techniques to craft a menu that's both familiar and surprising—just like a bite of a fresh lemon.
                </Typography>

                <Typography variant="h5">
                    Our Philosophy
                </Typography>
                <Typography variant="body1" paragraph>
                    At Little Lemon, we prioritize freshness, quality, and creativity. We work closely with local farmers to source the freshest produce, and our culinary team is constantly pushing the boundaries to create dishes that are a feast for your eyes as much as they are for your palate.
                </Typography>

                <Typography variant="h5">
                    Sustainability
                </Typography>
                <Typography variant="body1" paragraph>
                    We’re committed to sustainability and do our best to reduce our carbon footprint. Our 'farm-to-table' approach ensures low food miles, and we recycle and compost religiously. Our aim is to offer you an unforgettable dining experience that you can feel good about.
                </Typography>

                <Typography variant="h5">
                    Our Menu
                </Typography>
                <Typography variant="body1" paragraph>
                    Our chefs playfully incorporate lemon and citrus elements into a variety of global dishes. From the zesty Lemon-Ricotta Pancakes served during brunch to the sumptuous Lemon Garlic Roast Chicken for dinner, every dish is a twist of imagination and flavor.
                </Typography>

                <Typography variant="h5">
                    Come Join Us!
                </Typography>
                <Typography variant="body1" paragraph>
                    Little Lemon is more than a meal; it’s a celebration of life’s simple joys and intricate pleasures. We invite you to dine with us and experience the zest and zeal that define us.
                </Typography>

            </Box>
        </Container>
    );
}

export default AboutUs;
