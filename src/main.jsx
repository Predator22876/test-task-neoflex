import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Earphones from './Earphones.jsx';
import Basket from './Basket.jsx';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/earphones" element={<Earphones />} />
            <Route path="/basket" element={<Basket />} />
        </Routes>
    </BrowserRouter>
)
