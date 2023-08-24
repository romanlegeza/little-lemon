import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import useMediaQuery from '@mui/material/useMediaQuery';
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
                        <h3>Contact</h3>
                        <p>123 Main St City, State 12345</p>
                        <p>123-456-7890</p>
                        <p>
                            <a href="mailto:" className="App-link" target="_blank" rel="noreferrer">
                                email
                            </a>
                        </p>
                    </Box>
                </Flex>
            </footer>
        </Box>
    );
};
export default Footer;