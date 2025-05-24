import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import { Navigate } from 'react-router-dom';
import css from './Registration.module.css'

const RegistrationPage = () => {
  return (
    <div className={css.registrationPageWrapper}>
        <RegisterForm /> 
    </div>
  )
}

export default RegistrationPage