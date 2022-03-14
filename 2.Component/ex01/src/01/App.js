import React, { Component } from 'react'
import FoodList from './FoodList';

export default class App extends Component{
  render(){
    return(
    <div id="App">
      <FoodList />
    </div>
    );
  }
}

// export default App; 으로 해주고 class App해주던지 아님 지금처럼 한 번에. 