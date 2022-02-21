import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { Nave } from './styled';

export default function Header() {
  return (
    <Nave>
      <a to="/">
        <FaHome size={24} />
      </a>

      <a to="/login">
        <FaUserAlt size={24} />
      </a>

      <a to="/asdfg">
        <FaSignInAlt size={24} />
      </a>
    </Nave>

  );
}
