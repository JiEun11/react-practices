import React from 'react'
import styles from './assets/css/CardList.css';
import Card from './Card';
import {PropTypes} from 'prop-types';

export default function CardList ({title, cards}){
  return (
    <div className={styles.CardList}>
        <h1>{title}</h1>
        <div>
          {cards.map((card)=> <Card 
                              key={card.no}
                              no={card.no}
                              title={card.title}
                              description={card.description}
                              />)}
        </div>
    </div>
  )
}

CardList.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array
}

CardList.defaultProps = {
  title : 'ToDo',
  cards: {}
}


