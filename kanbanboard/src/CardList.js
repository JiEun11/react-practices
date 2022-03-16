import React from 'react'
import styles from './assets/css/CardList.css';
import Card from './Card';

const CardList = ({title, cards}) => {
  console.log(title, cards);
  return (
    <div className={styles.CardList}>
        <h1>{title}</h1>
        <div>
          {cards.map((card)=> <Card 
                              key={card.no}
                              title={card.title}
                              description={card.description}
                              tasks={card.tasks}
                              />)}
        </div>
    </div>
  )
}

export default CardList