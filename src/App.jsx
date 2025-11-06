import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UnicornRoutes from './unicorns';
import ProductsRoutes from './products';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/unicornios">Unicornios</Link> | 
        <Link to="/productos">Productos</Link>
      </nav>
      <Routes>
        <Route path="/unicornios/*" element={<UnicornRoutes />} />
        <Route path="/productos/*" element={<ProductsRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
