import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useState } from 'react';


function UptadeProduct() {


const [mydata, setmydata] = useState(null)


let{id}=useParams()


useEffect(() => {
datalar();
  
}, []);


async function getAllproductAdmin() {
  const res = await fetch("https://663a14d21ae792804bedfc73.mockapi.io/products/"+id);
  const data = await res.json();
  return data
}


async function datalar() {
  let datalars = await getAllproductAdmin(id)
  setmydata(datalars)
}


  return (

    <>
  <Helmet>
    <meta charSet="utf-8" />
    <title>Murad</title>
</Helmet>

 
{
  mydata&&
  <Formik
        initialValues={{ image:mydata.image , title: mydata.title, description: mydata.description }}
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
             
              fetch("https://663a14d21ae792804bedfc73.mockapi.io/products/"+id, {
                method: "put", 
              
                headers: {
                  "Content-Type": "application/json",
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
              body: JSON.stringify({image:values.image , title: values.title, description: values.description })
            })
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
        <h1>salam</h1>
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
}

</>
  )
}

export default UptadeProduct