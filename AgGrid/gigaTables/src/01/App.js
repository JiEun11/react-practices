import React from 'react';

const App = function() {
  // const App = React.createElement('h1', null, 'Hello world');  // null:부모 지정, 'Hello world':contents 지정
  // return App;
  const message = 'Hello World ex06';

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
  //React.createElement('div',React.createElement('h1',null,'Hello World ex06'),null);
}

export { App }