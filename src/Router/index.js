import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Pages/Login';
import Page404 from '../Pages/Page404';

export function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
    </Routes>

  );
}
