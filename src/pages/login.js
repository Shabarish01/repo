import React from 'react'
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "../CSS/login.css";



const Login = () => {
  const [successful, setSuccessful] = useState('');

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required').min(6, 'Password should be at least 6 characters'),
    }),
    onSubmit: (values) => {
      setSuccessful('Logged In!');
      formik.resetForm();
    },
  });

  return (
    <div>
      <div className='app_Signup'>
      <h2 style={{ textAlign: 'center'}}>Signup Form</h2>
      {successful && <p>{successful}</p>}
      <form className="app_form" onSubmit={formik.handleSubmit}>
      <div className='app_fname'>
          <label className="firstName">First Name</label>
          <input
            type="text"
            placeholder="firstName"
            name="firstName"
            {...formik.getFieldProps('firstName')}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <div>{formik.errors.firstName}</div>
          )}
        </div>
        <div className='app_lname'>
          <label className="lastName">Last Name</label>
          <input
            type="text"
            placeholder="lastName"
            name="lastName"
            {...formik.getFieldProps('lastName')}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <div>{formik.errors.lastName}</div>
          )}
        </div>
        <div className='app_email'>
          <label className="email">Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email && (
            <div>{formik.errors.email}</div>
          )}
        </div>
        <div className='password'>
          <label className="password">Password</label>
          <input
            type="password"
            placeholder="password"
            name="password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password && (
            <div>{formik.errors.password}</div>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default Login ;