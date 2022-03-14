import React from 'react'

const FoodListItem = ({name, quantity}) => {
  return (
    <li>{name} : {quantity}</li>
  )
}

export default FoodListItem