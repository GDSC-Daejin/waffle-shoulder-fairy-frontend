import React from 'react';
import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Main';

const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Home />} />
      <Route path="/mypage" element={<Home />} />
    </ReactRoutes>
  );
};

export default Routes;
