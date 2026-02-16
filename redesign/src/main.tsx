import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import './styles/index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const rootEl = document.getElementById('root');
if (!rootEl) throw new Error('Root element not found');

createRoot(rootEl).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
