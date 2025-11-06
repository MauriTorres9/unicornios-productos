import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ProductsContext } from '../context/ProductsContext';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, createProduct, editProduct } = useContext(ProductsContext);

  const productToEdit = products.find((p) => p.id === Number(id));

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: productToEdit ? productToEdit.name : '',
      price: productToEdit ? productToEdit.price : '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nombre requerido'),
      price: Yup.number().required('Precio requerido').positive('Precio > 0'),
    }),
    onSubmit: (values) => {
      if (productToEdit) {
        editProduct(productToEdit.id, values);
      } else {
        createProduct(values);
      }
      navigate('/productos');
    },
  });

  return (
    <div>
      <h1>{productToEdit ? 'Editar Producto' : 'Crear Producto'}</h1>
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
          <label>Precio:</label>
          <input
            name="price"
            type="number"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
          {formik.errors.price && <div style={{ color: 'red' }}>{formik.errors.price}</div>}
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default ProductForm;
