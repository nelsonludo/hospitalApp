import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SystemAdmin from './pages/SystemAdmin';
import MassiveLoading from './components/MassiveLoading';

function App() {
  return (
    <BrowserRouter>
      <MassiveLoading />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login/:route/:name' element={<Login />} />
        <Route path='/system_admin' element={<SystemAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
