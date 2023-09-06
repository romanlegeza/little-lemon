import { Box, Flex } from "@chakra-ui/react";
import { Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import Nav from "./Nav";

const Footer = () => {
    const isDesktop = useMediaQuery(theme => theme.breakpoints.up('md'));
    return (
        <Box>
            <footer>
                <Flex className="App-footer">
                    <Logo />
                    {isDesktop ? <Nav isHeader={false} /> : null}
                    <Box>
                        <Typography variant="h6" component="div">
                            Contact
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            123 Main St City, State 12345
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            123-456-7890
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Link to="mailto:" className="App-link" target="_blank" rel="noreferrer">
                                email
                            </Link>
                        </Typography>
                    </Box>
                </Flex>
            </footer>
        </Box>
    );
};
export default Footer;