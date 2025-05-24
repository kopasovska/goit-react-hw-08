import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useId } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { loginThunk } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = { email: '', password: '' };

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is a required field')
      .email('Invalid email format'),
    password: Yup.string()
      .required('Password is a required field')
      .min(8, 'Password must be at least 8 characters'),
  });

  const handleSubmit = (values) => {
    dispatch(loginThunk(values));
  };

  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginSchema}
      >
        <Form className={css.loginForm}>
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
          <button type="submit" className={css.primaryButton}>Sign in</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
