import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Nave } from './styled';

export default function Header() {
  return (
    <Nave>
      <Link to="/">
        <FaHome size={24} />
      </Link>

      <Link to="/login">
        <FaUserAlt size={24} />
      </Link>

      <Link to="/Page404">
        <FaSignInAlt size={24} />
      </Link>
    </Nave>

  );
}
