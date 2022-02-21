import React from 'react';
import { Container } from '../../Styles/GlobalStyles';
import { Paragrafo, Title } from './styled';

function App() {
  return (
    <Container>
      <Title>
        hello world
        <small> oii mundo </small>
      </Title>
      <Paragrafo>
        Lorem, ipsum dolor sit amet.
      </Paragrafo>
      <button type="button">enviar</button>
    </Container>
  );
}

export default App;
