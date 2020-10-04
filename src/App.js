import React from "react";
import Header from "./container/header/index";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#457B9D',
      light: '#A8DADC',
      dark: '#1D3557'
    }
  },
});

export default function App(props) {
  const { children } = props;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Header />
      {children}
    </ThemeProvider>
  );
}
