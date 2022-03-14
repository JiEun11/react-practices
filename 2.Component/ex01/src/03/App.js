import React from 'react'
import FoodList from './FoodList';

const App = function(){

  const foods=[{
    no: 1,
    name: 'Bread',
    quantity: 10
  },{
    no: 2,
    name: 'Egg',
    quantity: 3
  },{
    no: 3,
    name: 'Milk',
    quantity: 5
  }];

  return (
    <div id="App">
      <FoodList foods={this.foods} />
    </div>
  )
}

export default App
