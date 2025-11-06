import React, { createContext, useState, useEffect } from 'react';

// Crear contexto
export const UnicornContext = createContext();

export const UnicornProvider = ({ children }) => {
  const [unicorns, setUnicorns] = useState([]);

  // Simular fetch inicial
  useEffect(() => {
    getUnicorns();
  }, []);

  const getUnicorns = () => {
    setUnicorns([
      { id: 1, name: 'Sparkle', age: 100, color: 'Pink' },
      { id: 2, name: 'Rainbow', age: 50, color: 'Blue' },
    ]);
  };

  const createUnicorn = (unicorn) => {
    const newUnicorn = { ...unicorn, id: Date.now() };
    setUnicorns([...unicorns, newUnicorn]);
  };

  const editUnicorn = (id, updated) => {
    setUnicorns(unicorns.map((u) => (u.id === id ? { ...u, ...updated } : u)));
  };

  const deleteUnicorn = (id) => {
    setUnicorns(unicorns.filter((u) => u.id !== id));
  };

  return (
    <UnicornContext.Provider value={{ unicorns, createUnicorn, editUnicorn, deleteUnicorn }}>
      {children}
    </UnicornContext.Provider>
  );
};
