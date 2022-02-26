import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';

import Header from './components/Header';
import Routers from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routers />

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
