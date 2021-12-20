import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { UserContextProvider } from './UserContext';
import { ThemeProvider } from '@material-ui/core';
import theme from './Theme';

ReactDOM.render(
  <UserContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </UserContextProvider>,
  document.getElementById('app')
);