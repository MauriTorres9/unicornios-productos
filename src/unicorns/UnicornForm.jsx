import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { UnicornContext } from '../context/UnicornContext';

const UnicornForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { unicorns, createUnicorn, editUnicorn } = useContext(UnicornContext);

  // Buscar unicornio a editar
  const unicornToEdit = unicorns.find((u) => u.id === Number(id));

  // Formik con enableReinitialize
  const formik = useFormik({
    enableReinitialize: true, // Esto permite actualizar los valores iniciales cuando cambian
    initialValues: {
      name: unicornToEdit ? unicornToEdit.name : '',
      age: unicornToEdit ? unicornToEdit.age : '',
      color: unicornToEdit ? unicornToEdit.color : '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nombre requerido'),
      age: Yup.number().required('Edad requerida').positive('Edad > 0'),
      color: Yup.string().required('Color requerido'),
    }),
    onSubmit: (values) => {
      if (unicornToEdit) {
        editUnicorn(unicornToEdit.id, values);
      } else {
        createUnicorn(values);
      }
      navigate('/unicornios');
    },
  });

  return (
    <div>
      <h1>{unicornToEdit ? 'Editar Unicornio' : 'Crear Unicornio'}</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && <div style={{ color: 'red' }}>{formik.errors.name}</div>}
        </div>
        <div>
          <label>Edad:</label>
          <input
            name="age"
            type="number"
            value={formik.values.age}
            onChange={formik.handleChange}
          />
          {formik.errors.age && <div style={{ color: 'red' }}>{formik.errors.age}</div>}
        </div>
        <div>
          <label>Color:</label>
          <input
            name="color"
            value={formik.values.color}
            onChange={formik.handleChange}
          />
          {formik.errors.color && <div style={{ color: 'red' }}>{formik.errors.color}</div>}
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default UnicornForm;
