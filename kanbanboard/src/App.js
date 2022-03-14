import React from 'react';
import TaskList from './TaskList';

const App = () => {
  let data = require('../public/data.json');
  console.log(data);
  return (
    <div id="App">
      <TaskList data={data} />
    </div>

  )
}

export default App;