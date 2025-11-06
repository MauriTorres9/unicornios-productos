import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductsView from './ProductsView';
import ProductForm from './ProductForm';
import { ProductsProvider } from '../context/ProductsContext';

const ProductsRoutes = () => {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/" element={<ProductsView />} />
        <Route path="crear" element={<ProductForm />} />
        <Route path="editar/:id" element={<ProductForm />} />
      </Routes>
    </ProductsProvider>
  );
};

export default ProductsRoutes;
