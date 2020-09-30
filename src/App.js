import React from "react";
import Header from "./container/header/index";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
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
