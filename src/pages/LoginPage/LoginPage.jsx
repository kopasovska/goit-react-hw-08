import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import { Navigate } from 'react-router-dom'
import css from './LoginPage.module.css'

const LoginPage = () => {
  return (
    <div className={css.loginPageWrapper}>
        <LoginForm />
    </div>
  )
}

export default LoginPage