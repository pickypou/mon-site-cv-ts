import createTheme, { Theme, ThemeOptions } from "@mui/material/styles/createTheme";

const themeOptions: ThemeOptions = {
    palette: {
          primary: {
            main: '#344955',
            contrastText: '#f9aa33',
          },
          secondary: {
            main: '#36434b',
            contrastText: '#f4a835',
          },
        },
      };
  export const theme: Theme = createTheme(themeOptions);