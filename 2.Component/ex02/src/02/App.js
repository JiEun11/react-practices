import React from 'react'
import './assets/css/App.css';

const App = () => {
  return (
    <div>
      <h1 className={`Header`}>{`Normal CSS: (css-loader options: {modules: false})`}</h1>
    </div>
  )
}

export default App