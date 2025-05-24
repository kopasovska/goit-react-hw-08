import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './AuthNav.module.css'

const AuthNav = () => {
  return (
    <div className={css.authMenu}>
        <NavLink to='/login' className={css.authLink}>Sign In</NavLink>
        <NavLink to='/register' className={css.authLink}>Sign Up</NavLink>
    </div>
  )
}

export default AuthNav