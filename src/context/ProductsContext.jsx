import React, { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Datos iniciales
    setProducts([
      { id: 1, name: 'Poción Mágica', price: 50 },
      { id: 2, name: 'Arco Iris de Caramelo', price: 30 },
    ]);
  }, []);

  const createProduct = (product) => {
    const newProduct = { ...product, id: Date.now() };
    setProducts([...products, newProduct]);
  };

  const editProduct = (id, updated) => {
    setProducts(products.map((p) => (p.id === id ? { ...p, ...updated } : p)));
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <ProductsContext.Provider value={{ products, createProduct, editProduct, deleteProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
