import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pages from './Components/Pages';
import Navbar from './Components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Pages />
    <App />
  </React.StrictMode>
);

