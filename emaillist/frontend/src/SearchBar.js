import React from 'react'
import styles from './assets/scss/Searchbar.scss';
import {PropTypes} from 'prop-types';

export default function SearchBar({callBack}){
  return (
    <div className={styles.Searchbar}>
      <input 
        type="text" 
        placeholder="찾기"
        onChange={e=> callBack(e.target.value)}/>
    </div>
  )
}

SearchBar.propTypes ={
  callback : PropTypes.func.isRequired
}
