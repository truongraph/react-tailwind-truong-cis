import React from 'react';
import './i18n';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import { Contact,Introduce } from './components';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="introduce" element={<Introduce />} />
    <Route path="contact" element={<Contact />} />
  </Routes>
</BrowserRouter>,
);
