import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Providers from './config/Providers.tsx';

import './styles/index.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
