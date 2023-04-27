import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalProvider } from './contexts/globalContext';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
