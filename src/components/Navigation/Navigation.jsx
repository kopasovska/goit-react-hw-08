import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.navMenu}>
      <NavLink to="/" className={css.navLink}>Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts" className={css.navLink}>Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
