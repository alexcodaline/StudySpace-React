import React from 'react'
import {Formik, Form, Field} from 'formik';

const Contacts = () => {

  const validateName = (value) =>{
  if(!value){
    return 'Required'
  }
 }

  const validateEmail = (value) =>{
  if(!value){
    return 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
    return 'Invalid email address'
  }
 }

  return (
    <>
    <h1>Login</h1>
    <p>Subscribe to our updates</p>
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      onSubmit={values => {console.log(values)}}
      >
        {({errors, touched}) => (
          <Form autoComplete="off">
            <label htmlFor="firstName">Name</label>
            <Field id="firstName" name="name" validate={validateName} className={errors.name && touched.name ? "invalid" : ""} />
            {errors.name && touched.name && <p>{errors.name}</p>}
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" validate={validateEmail} className={errors.email && touched.email ? "invalid" : ""}  />
            {errors.email && touched.email && <p>{errors.email}</p>}
            <button type="submit">Sign in</button>
          </Form>
        )}
      </Formik>
  </>

  )
}

export default Contacts