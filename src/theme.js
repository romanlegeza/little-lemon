import { blueGrey, yellow } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
    palette: {
        primary: blueGrey,
        secondary: yellow,
    },
    typography: {
        fontFamily: [
            'Markazi Text',
            'serif',
        ].join(','),
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: {
                    color: 'inherit',
                    textDecoration: 'none',
                },
            },
        },
    },
});