import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Nav from "./Nav";
import Logo from "./Logo";

const Footer = () => {
    return (
        <Box backgroundColor="#18181b">
            <footer>
                <Flex
                    margin="0 auto"
                    px={12}
                    color="white"
                    justifyContent="center"
                    alignItems="center"
                    maxWidth="1024px"
                    height={156}
                >
                    <Logo />
                    <Nav isHeader={false} />
                    <Box>
                        <h3>Contact</h3>
                        <p>123 Main St City, State 12345</p>
                        <p>123-456-7890</p>
                        <p>
                            <a href="mailto:" target="_blank" rel="noreferrer">
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