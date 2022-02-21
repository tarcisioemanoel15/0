import React from 'react';
import Login from './Pages/Login';
import GlobalStyled from './Styles/GlobalStyles';
import Reader from './Components/Header';

function App() {
  return (
    <>
      <Reader />
      <Login />

      <GlobalStyled />
    </>
  );
}

export default App;
