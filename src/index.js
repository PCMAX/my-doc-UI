import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        // primary: red,
        // secondary: {
        //     // main: amber [500],
        //     // main: '#FFA000',
        //     main: amber.A400,
        //     light: amber [200],
        //     dark: amber [700],
        //     contrastText: '#000',
        //     contrastThreshold: 3,
        // },
        // spacing: {
        //     unit: 10,
        // },
        // type: 'dark',
        typography: {
            // Use the system font instead of the default Roboto font.
            fontFamily: 
            [
                'AvenirLight',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            fontWeightMedium: 500,
            // body1: {
            //     fontWeight: 500,
            // },
            // subheading: {
            //     fontSize: 12,
            // },
            // button: {
            //     fontStyle: 'italic',
            // },
        },


    }
});

// console.log(theme);

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
