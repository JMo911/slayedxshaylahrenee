import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/system';

const THEME = createTheme({
  typography: {
    fontFamily: `"Spectral", serif`,
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#78A2CC',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      // light: '#0066ff',
      main: '#B399D4',
      // dark: will be calculated from palette.secondary.main,
      // contrastText: '#ffcc00',
    },
    error: {
      main: '#7B1114',
    },
    warning: {
      main: '#f19c5b',
    },
    info: {
      main: '#cdd2d7',
    },
    success: {
      main: '#86835b',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },

  // --mood: #e6d4c6;
  // --earth: #af7a60;
  // --olive-green: #5f5c27;
  // --pale-green: #86835b;
  // --peach: #f19c5b;
  // --rose-gold: #d6bdbd;
  // --white: #eae1e2;
  // --dark-brown: #3a180e;
  // --powder-blue: #cdd2d7;
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={THEME}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
