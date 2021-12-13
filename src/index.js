import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { UserContextProvider } from './UserContext';

ReactDOM.render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
  document.getElementById('app')
);