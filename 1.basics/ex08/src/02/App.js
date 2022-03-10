import React from 'react';

const App = function(){
  /* 
    React Component는 단일 루트 노드만 rendering 할 수 있다.
    error :
    return (
      <h2>App01</h2>
      <p>JSX Tutorials - 특징2 : Single Root Node</p>
  );
  */
  return (
    <div id="App">
      <h2>App01</h2>
      <p>JSX Tutorials - 특징2 : Single Root Node</p>
    </div>
  );
}

export default App;