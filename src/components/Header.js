import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Nav from "./Nav";
import Logo from "./Logo";

const Header = () => {
    return (
        <Box backgroundColor="#18181b">
            <header>
                <Flex
                    margin="0 auto"
                    px={12}
                    color="white"
                    justifyContent="center"
                    alignItems="center"
                    maxWidth="1024px"
                    height={56}
                >
                    <Logo />
                    <Nav isHeader={true}/>
                </Flex>
            </header>
        </Box>
    );
};
export default Header;