import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <h1>
        Login
        <small>Oie</small>
      </h1>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      Enviar
    </Container>
  );
}
