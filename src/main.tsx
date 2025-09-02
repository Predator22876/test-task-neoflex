import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Earphones from './Earphones.jsx';
import Basket from './Basket.js';
import App from './App.js';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/earphones" element={<Earphones />} />
            <Route path="/basket" element={<Basket />} />
        </Routes>
    </BrowserRouter>
)
