import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  // const botaoClicado = useSelector((state) => state.example.botaoClicado);

  return (
    <Nav>
      <a to="/">
        <FaHome size={24} />
      </a>
      <a to="/login">
        <FaUserAlt size={24} />
      </a>
      <a to="/asdasd">
        <FaSignInAlt size={24} />
      </a>
    </Nav>
  );
  // {botaoClicado ? 'Clicado' : 'Não clicado'}
}
