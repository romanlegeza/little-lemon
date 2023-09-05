import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
    return (
        <Box>
            <header>
                <Flex className="App-header">
                    <Logo />
                    <Nav isHeader={true} />
                </Flex>
            </header>
        </Box>
    );
};

export default Header;