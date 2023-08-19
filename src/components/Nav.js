import React from "react";
import { Box } from "@chakra-ui/react";

const Nav = (props) => {
    const isHeader = props.isHeader || false;
    return (
        <nav
            style={{
                display: isHeader ? "flex" : "block",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: isHeader ? "1024px" : "100px",
                margin: "0 auto",
                padding: "0 12px",
            }}
        >
            <Box
                as="ul"
                style={{
                    display: isHeader ? "flex" : "block",
                    justifyContent: "space-between",
                    alignItems: "center",
                    listStyle: "none",
                    width: "100%",
                    maxWidth: "1024px",
                    margin: "0 auto",
                    padding: "0 12px",
                }}
            >
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </Box>
        </nav>
    );
};

export default Nav;
