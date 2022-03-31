import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from '../../assets/scss/component/about/Navigation.scss';

const navigation = () => {
  return (
    <nav className={styles.Navigation}>
      <NavLink to={'/about/me'}>Me</NavLink>
      <span/>
      <NavLink to={'/about/location'}>Location</NavLink>
    </nav>  
  )
}

export default navigation