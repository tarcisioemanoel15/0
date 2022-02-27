import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';

import history from './services/history';
import Header from './components/Header';
import Routers from './routes';

function App() {
  return (
    <Router history={history}>
      <Header />
      <Routers />

      <ToastContainer autoClose={3000} className="toast-container" />
      <GlobalStyle />
    </Router>
  );
}

export default App;
