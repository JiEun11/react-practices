import React from 'react';

const App = function() {
  // const App = document.createElement('h1');
  // App.textContent = 'Hello Webpack';
  const App = React.createElement('h1', null, 'Hello world ex05');  // null:부모 지정, 'Hello world':contents 지정
  return App;
}

export { App }