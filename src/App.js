import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SystemAdmin from './pages/SystemAdmin';
import MassiveLoading from './components/MassiveLoading';
import { systemAdminLinks } from './utils/constants';

function App() {
  return (
    <BrowserRouter>
      <MassiveLoading />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* Block this route if the user is already logged in */}
        <Route path='/login/:route/:name' element={<Login />} />
        {/* Block this route if the user is not a system admin */}
        <Route path='/system_admin' element={<SystemAdmin />}>
          {systemAdminLinks.map((link, index) => {
            if (link?.sublinks) {
              return (
                <Route key={index} path={link.link} element={link?.element}>
                  {link?.sublinks?.map((link, index) => {
                    return (
                      <Route
                        key={index}
                        path={link?.link}
                        element={link?.element}
                      />
                    );
                  })}
                </Route>
              );
            } else {
              return (
                <Route key={index} path={link.link} element={link?.element} />
              );
            }
          })}
        </Route>
        <Route path='/help' element={<h1>The help page is comming soon.</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
