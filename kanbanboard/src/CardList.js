import React from 'react'
import styles from './assets/css/CardList.css';

const CardList = ({title}) => {
  return (
    <div className={styles.CardList}>
        <h1>{title}</h1>
    </div>
  )
}

export default CardList