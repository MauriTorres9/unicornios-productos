import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const ProductsView = () => {
  const { products, deleteProduct } = useContext(ProductsContext);

  return (
    <div>
      <h1>Listado de Productos</h1>
      <Link to="crear">Crear Nuevo Producto</Link>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>{p.price}</td>
              <td>
                <Link to={`editar/${p.id}`}>Editar</Link>{' '}
                <button onClick={() => deleteProduct(p.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsView;
