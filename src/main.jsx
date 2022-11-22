import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { SocialMedia } from './SocialMedia';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <SocialMedia />
  </React.StrictMode>
);
