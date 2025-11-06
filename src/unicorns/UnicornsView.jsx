import React, { useContext } from 'react';
import { UnicornContext } from '../context/UnicornContext';
import { Link } from 'react-router-dom';

const UnicornsView = () => {
  const { unicorns, deleteUnicorn } = useContext(UnicornContext);

  return (
    <div>
      <h1>Listado de Unicornios</h1>
      <Link to="crear">Crear Nuevo Unicornio</Link>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Color</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {unicorns.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.age}</td>
              <td>{u.color}</td>
              <td>
                <Link to={`editar/${u.id}`}>Editar</Link>{' '}
                <button onClick={() => deleteUnicorn(u.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UnicornsView;
