import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUser } from '../../redux/auth/selectors'
import { logoutThunk } from '../../redux/auth/operations';
import css from './UserMenu.module.css';
import clsx from 'clsx';

const UserMenu = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();


  return (
    <div className={css.userMenu}>
        <p className={css.userMenuText}>Hi, {user.name}</p>
        <button onClick={() => dispatch(logoutThunk())} className={clsx(css.primaryButton, css.userMenuButton)}>Log out</button>
    </div>
  )
}

export default UserMenu