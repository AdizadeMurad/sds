import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function AddProducts() {







  return (<>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Murad</title>
    </Helmet>



    <Formik
      initialValues={{ image: '', title: '', description: '' }}
      validationSchema={Yup.object({
        image: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        title: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        description: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {


          async function AddProduct() {
            const res = await fetch("https://663a14d21ae792804bedfc73.mockapi.io/products", {
              method: "post",
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              }, body: JSON.stringify(values),
            });
            const data = await res.json();
          }
           AddProduct();
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <label htmlFor="image">image</label>
        <Field name="image" type="text" />
        <ErrorMessage name="image" />

        <label htmlFor="title">Title</label>
        <Field name="title" type="text" />
        <ErrorMessage name="title" />

        <label htmlFor="description">Description</label>
        <Field name="description" type="text" />
        <ErrorMessage name="description" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>


  </>


  )
}

export default AddProducts