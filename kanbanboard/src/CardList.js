import React from 'react'
import styles from './assets/css/CardList.css';

const CardList = ({title, cards}) => {
  console.log(title, cards);
  return (
    <div className={styles.CardList}>
        <h1>{title}</h1>
        
    </div>
  )
}

export default CardList