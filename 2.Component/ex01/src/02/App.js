import React, { Component } from 'react'
import FoodList from './FoodList';

export default class App extends Component{
  constructor(){
    super(arguments);

    this.foods = [{
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
  }

  render(){
    return(
    <div id="App">
      <FoodList foods={this.foods} />
    </div>
    );
  }
}

// export default App; 으로 해주고 class App해주던지 아님 지금처럼 한 번에. 