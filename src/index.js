import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ShopPage from './components/pages/ShopPage';
import NotFound from './components/pages/NotFound';
import ViewPage from './components/pages/ViewPage';
import CartPage from './components/pages/CartPage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/shopping-cart/' element={<HomePage />} />
        <Route path='/shopping-cart/shop' element={<ShopPage />} />
        <Route path='/shopping-cart/view/:id' element={<ViewPage />} />
        <Route path='/shopping-cart/cart' element={<CartPage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);