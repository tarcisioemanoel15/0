import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyled from './Styles/GlobalStyles';
import Reader from './Components/Header';
import { Routers } from './Router';

function App() {
  return (
    <BrowserRouter>
      <Reader />
      <Routers />

      <GlobalStyled />
    </BrowserRouter>
  );
}

export default App;
