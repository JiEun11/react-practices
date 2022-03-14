import React from 'react'
import FoodListItem from './FoodListItem';

const FoodList = ({foods}) => {
  return (
    <ul>
      {foods.map((food) => <FoodListItem 
                              key={food.no}
                              name={food.name} 
                              quantity={food.quantity} /> )}
    </ul>
  )
}

export default FoodList