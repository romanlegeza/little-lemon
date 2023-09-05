import React, { useEffect } from "react";
import logo from "../images/Logo.svg";
import { Button } from "@mui/material";

const Logo = () => {
    useEffect(() => {
        const logo = document.querySelector(".App-logo");
        logo.addEventListener("click", () => {
            window.location.href = "/";
        });
    }, []);

    return (
        <Button>
            <img src={logo} className="App-logo" alt="logo" />
        </Button>
    );
}

export default Logo;