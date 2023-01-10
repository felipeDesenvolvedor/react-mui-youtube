import {createTheme} from "@mui/material";
import { yellow, cyan } from "@mui/material/colors"

export const LightTheme = createTheme({
    palette: {
        primary: {
            main: yellow[700],
            dark: yellow[800],
            light:yellow[500],
            contrastText:'#fff'
        },
        secondary: {
            main: cyan[700],
            dark: cyan[800],
            light: cyan[500],
            contrastText:'#fff'
        },
        background: {
            paper:  '#fff',
            default:'#f7f6f3'
        }
    }
})