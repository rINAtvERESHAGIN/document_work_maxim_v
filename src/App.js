import React from "react";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import Routes from "./Routes";
import {BrowserRouter} from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      light: '#4791db',
      main: '#1976d2',
      dark900: '#115293',
      contrastText: '#fff',
    },
    secondary: {
      light: '#e33371',
      main: '#dc004e',
      dark: '#9a0036',
      contrastText: '#000',
    },
    info: {
      light: '#64b5f6',
      main: '#2196f3',
      dark: '#1976d2',
    },
    warning: {
      light: '#ffb74d',
      main: '#ff9800',
      dark: '#f57c00',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
    },
    success: {
      light: '#81c784',
      main: '#4caf50',
      dark: '#388e3c',
    }
  },
  props: {
    MuiDialogTitle: {
      disableTypography: true
    }
  },
  overrides: {
    MuiDialogTitle: {
      root: {
        fontSize: 32,
      }
    }
  }
});

class App extends React.Component {

  render() {
    return (
          <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes/>
                </BrowserRouter>
          </ThemeProvider>
    );
  };
}

export default App;
