import React from 'react';

// import { toast } from 'react-toastify';
import { Container } from '../../styles/GlobalStyles';
import { Paragrafo, Title } from './styled';

export default function Login() {
  // toast.success('suuuucesso');
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button">Enviar</button>
    </Container>
  );
}
/*
// import axios from '../../services/axios';
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      const { data } = response;

      console.log(data);
    }

    getData();
  }, []);
  */
