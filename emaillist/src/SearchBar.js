import React from 'react'
import styles from './assets/scss/Searchbar.scss';

const SearchBar = ({callBack}) => {
  return (
    <div className={styles.Searchbar}>
      <input 
        type="text" 
        placeholder="찾기"
        onChange={e=> callBack(e.target.value)}/>
    </div>
  )
}

export default SearchBar