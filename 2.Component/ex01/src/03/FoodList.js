import React from 'react'

const FoodList = ({foods}) => {
  return (
    <ul>
      {foods.map((food) => <FoodListItem 
                              name={food.name} 
                              quantity={food.quantity} /> )}
    </ul>
  )
}

export default FoodList