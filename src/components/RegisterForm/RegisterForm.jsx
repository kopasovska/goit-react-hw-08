import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { registerThunk } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: '', email: '', password: '' };

  const loginSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .required('Email is a required field')
      .email('Invalid email format'),
    password: Yup.string()
      .required('Password is a required field')
      .min(8, 'Password must be at least 8 characters'),
  });

  const handleSubmit = (values) => {
     console.log('Register form values:', values);
    dispatch(registerThunk(values));
  };

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className={css.registerForm}>
          <span className={css.formInputWrapper}>
            <label htmlFor={nameFieldId}>Name</label>
            <Field type="text" name="name" id={nameFieldId} className={css.formInput} />
            <ErrorMessage name="name" component="span" className={css.errorMessage} />
          </span>
          <span className={css.formInputWrapper}>
            <label htmlFor={emailFieldId}>Email:</label>
            <Field type="email" name="email" id={emailFieldId} className={css.formInput} />
            <ErrorMessage name="email" component="span" className={css.errorMessage} />
          </span>
          <span className={css.formInputWrapper}>
            <label htmlFor={passwordFieldId}>Password</label>
            <Field type="password" name="password" id={passwordFieldId} className={css.formInput} />
            <ErrorMessage name="password" component="span" className={css.errorMessage} />
          </span>          
          <button type="submit" className={css.primaryButton}>Sign up</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;
